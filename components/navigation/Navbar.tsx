"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import DuctDaddyBrand from "@/public/assets/duct-daddy-brand.png";
import Button from "../ui/Button";
import { FaPhoneAlt } from "react-icons/fa";
import NavbarDropdown from "./NavbarDropdown";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollThreshold = 0;
  const pathname = usePathname();
  const [mobileMenuStep, setMobileMenuStep] = useState<"main" | "services" | "areas">("main");


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
    { label: "Services", href: "/service" },
    { label: "Service Area", href: "/service-area" },
    { label: "Blog", href: "/blog" },
  ];
  const serviceDropdown = [
    { label: "Air Duct Cleaning", href: "/service/air-duct-cleaning" },
    { label: "Dryer Vent Cleaning", href: "/service/dryer-vent-cleaning" },
    { label: "HVAC Cleaning", href: "/service/hvac-cleaning" },
  ];
  const serviceAreaDropdown = [
    { label: "Oak Grove", href: "/service-area/oak-grove" },
    { label: "Grain Valley", href: "/service-area/grain-valley" },
    { label: "Blue Springs", href: "/service-area/blue-springs" },
    { label: "Lees Summit", href: "/service-area/lees-summit" },
    { label: "Independence", href: "/service-area/independence" },
    { label: "Kansas City", href: "/service-area/kansas-city" },
    { label: "Raymore", href: "/service-area/raymore" },
    { label: "Raytown", href: "/service-area/raytown" },
    { label: "Pleasant Hill", href: "/service-area/pleasant-hill" },
    { label: "Odessa", href: "/service-area/odessa" },
  ];

  return (
    <header className={`h-[100px] w-full fixed z-40 transition-all duration-100 ease-in-out ${isOpen
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
              {Links.map(({ label, href }) => {
                if (label === "Services") {
                  const isActive = pathname.startsWith("/service/");
                  return (
                    <NavbarDropdown
                      key={label}
                      label="Services"
                      items={serviceDropdown}
                      pathname={pathname}
                      className={isActive ? "text-primary" : "text-white25 hover:text-white10"}
                    />
                  );
                }

                if (label === "Service Area") {
                  const isActive = pathname.startsWith("/service-area/");
                  return (
                    <NavbarDropdown
                      key={label}
                      label="Service Area"
                      items={serviceAreaDropdown}
                      pathname={pathname}
                      className={isActive ? "text-primary" : "text-white25 hover:text-white10"}
                    />
                  );
                }

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-p font-bold py-4 ${pathname === href
                      ? "text-primary"
                      : "text-white25 hover:text-white10"
                      }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

          </div>
          <div>
            {pathname === "/blog" ? (
              <Link href="/manage-blog">
                <Button size="sm" className="hidden lg:flex" variant="primary">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <div className="flex items-center gap-x-4">
                <Link href="tel:+18167082608">
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
            )}
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
                {mobileMenuStep === "main" && (
                  <>
                    {Links.map((link) => {
                      if (link.label === "Services") {
                        return (
                          <li key={link.label}>
                            <button
                              onClick={() => setMobileMenuStep("services")}
                              className="text-left flex items-center gap-x-2 text-white10 hover:text-white5"
                            >
                              {link.label}
                              <FaAngleRight className="w-6 h-6" />
                            </button>
                          </li>
                        );
                      }

                      if (link.label === "Service Area") {
                        return (
                          <li key={link.label}>
                            <button
                              onClick={() => setMobileMenuStep("areas")}
                              className="text-left flex items-center gap-x-2 text-white10 hover:text-white5"
                            >
                              {link.label}
                              <FaAngleRight className="w-6 h-6" />
                            </button>
                          </li>
                        );
                      }

                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={`${pathname === link.href
                              ? "text-primary"
                              : "text-white10 hover:text-white5"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                    {pathname === "/blog" && (
                      <li>
                        <Link href={"/manage-blog"} onClick={() => setIsOpen(false)}>
                          Dashboard
                        </Link>
                      </li>
                    )}
                  </>
                )}

                {mobileMenuStep === "services" && (
                  <>
                    <li>
                      <button
                        onClick={() => setMobileMenuStep("main")}
                        className="text-left flex items-center gap-x-2 text-white10 hover:text-white5"
                      >
                        <FaArrowLeft className="w-6 h-6" />
                        Back
                      </button>
                    </li>
                    {serviceDropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-white10 hover:text-white5"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </>
                )}

                {mobileMenuStep === "areas" && (
                  <>
                    <li>
                      <button
                        onClick={() => setMobileMenuStep("main")}
                        className="text-left flex items-center gap-x-2 text-white10 hover:text-white5"
                      >
                        <FaArrowLeft className="w-6 h-6" />
                        Back
                      </button>
                    </li>
                    {serviceAreaDropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-white10 hover:text-white5"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}