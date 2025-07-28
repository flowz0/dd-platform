"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import DuctDaddyBrand from "@/public/assets/duct-daddy-brand.png";
import Button from "../ui/Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollThreshold = 0;
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const Links = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Service Area", href: "/service-area" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className={`h-[100px] w-full fixed z-30 transition-all duration-300 ease-in-out ${isOpen
      ? "bg-white95"
      : isScrolled
      ? "bg-white95"
      : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center justify-center gap-x-12">
            <Link href="/">
              <Image
                src={DuctDaddyBrand}
                alt="Netflows logo"
                className="h-16 w-auto"
                priority={true}
                quality={100}
                loading="eager"
                draggable={false}
              />
            </Link>

            <div className="hidden md:flex gap-x-8">
              {Links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-h6 font-bold ${(href === "/services" && pathname.startsWith("/services")) || pathname === href
                    ? 'text-primary'
                    : 'text-white25 hover:text-white10'
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Link href="/">
              <Button 
                Icon={FaPhoneAlt} 
                size="sm" 
                variant="secondary"
                iconAlign
                className="hidden lg:flex" 
              >
                Call us
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" className="hidden lg:flex" variant="primary">
                Book online
              </Button>
            </Link>
          </div>

          {/* mobile */}
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center cursor-pointer w-12 h-12 relative z-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`bg-white25 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${isOpen
                ? 'rotate-45 top-1/2'
                : 'top-[calc(50%-10px)]'
                }`}
            ></span>
            <span
              className={`bg-white25 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${isOpen
                ? 'opacity-0 top-1/2'
                : 'top-1/2'
                }`}
            ></span>
            <span
              className={`bg-white25 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${isOpen
                ? '-rotate-45 top-1/2'
                : 'top-[calc(50%+10px)]'
                }`}
            ></span>
          </button>
        </div>
        {/* Mobile Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden bg-white95"
            >
              <ul className="flex flex-col gap-y-4 px-6 text-h5 font-bold pt-4">
                {Links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${pathname === link.href
                        ? "text-primary"
                        : "text-white10 hover:text-white5"
                        }`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}