"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavbarDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
  pathname: string;
}

export default function NavbarDropdown({
  label,
  items,
  className = "",
  pathname,
}: NavbarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Parent link styling is passed down from Navbar */}
      <button
        className={`text-p font-bold py-4 cursor-pointer transition-colors flex items-center gap-x-2 group-hover:text-white10 ${className}`}
      >
        {label}
        <FaAngleDown className={`${isOpen ? "rotate-90" : ""} transition-transform duration-500 ease-in-out w-4 h-4`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-[-16px] top-full w-64 rounded-lg bg-white95 outline outline-white75 shadow shadow-white75 z-40"
          >
            <ul className="flex flex-col py-4 px-2">
              {items.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block px-4 py-2 rounded-lg text-p transition-colors duration-100 ease-in-out ${isActive
                        ? "bg-primary text-white95"
                        : "text-white25 hover:bg-primary hover:text-white95"
                        }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
