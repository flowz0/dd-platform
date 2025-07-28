"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavbarDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string; // <-- add this
}

export default function NavbarDropdown({
  label,
  items,
  className = "",
}: NavbarDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Parent link styling is passed down from Navbar */}
      <button
        className={`text-h6 font-bold cursor-pointer transition-colors ${className}`}
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-[-16px] top-full w-64 rounded-lg bg-white90 shadow shadow-white50 z-40"
          >
            <ul className="flex flex-col py-4 px-2">
              {items.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-4 py-2 rounded-lg text-white25 text-p transition-colors duration-100 ease-in-out hover:bg-primary hover:text-white95"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
