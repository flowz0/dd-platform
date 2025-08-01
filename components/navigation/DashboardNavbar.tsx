"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import DuctDaddyBrandImg from "@/public/assets/duct-daddy-brand.png";

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  activeIcon: ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function DashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function SidebarLink({ href, label, icon, activeIcon, className, disabled = false }: SidebarLinkProps) {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);

    const baseClass =
      "py-3 px-5 text-p rounded-2xl flex items-center gap-x-3 transition-colors duration-200 ease-in-out ";
    const activeClass = isActive
      ? "bg-primary text-white95"
      : "text-white25 hover:bg-white75/40";
    const combinedClass = `${baseClass} ${activeClass} ${className} ${disabled ? "opacity-50 cursor-not-allowed hover:bg-transparent" : ""
      }`;

    if (disabled) {
      return (
        <div className={combinedClass}>
          <div>{isActive ? activeIcon : icon}</div>
          {label}
        </div>
      );
    }

    return (
      <Link href={href} className={combinedClass} onClick={() => setIsOpen(!isOpen)}>
        <div>{isActive ? activeIcon : icon}</div>
        {label}
      </Link>
    );
  }

  return (
    <nav className="lg:hidden">
      <div className="h-[64px] bg-white95 w-full fixed z-30 transition-all duration-100 ease-in-out flex items-center px-6">
        <div className="flex items-center gap-x-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white50 size-8">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
          <Link href={"/"} className="text-white10 text-p">
            Duct Daddy, LLC
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-480px" }}
            animate={{ x: 0 }}
            exit={{ x: "-480px" }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className={`bg-white95 w-full sm:w-[480px] shadow-lg shadow-white75 h-screen fixed z-40`}
          >
            <motion.div
              className="h-[64px] flex items-center px-6">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white25 size-8">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
            <div className="mt-8 px-6 flex flex-col items-center justify-center">
              <Image
                src={DuctDaddyBrandImg}
                alt="Duct Daddy Duct Cleaning logo"
                className="w-32 h-full object-cover"
              />
              <p className="text-white25 text-p mt-4">
                Duct Daddy, LLC
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-y-2 px-6">
              <SidebarLink
                href="/dashboard"
                label="Dashboard"
                className="cursor-not-allowed"
                disabled
                icon={
                  // Outline icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                }
                activeIcon={
                  // Solid icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                }
              />
              <SidebarLink
                href="/manage-blog"
                label="Blog"
                icon={
                  // Outline icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                }
                activeIcon={
                  // Solid icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                  </svg>
                }
              />
              <SidebarLink
                href="/reviews"
                label="Reviews"
                className="cursor-not-allowed"
                disabled
                icon={
                  // Outline icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                }
                activeIcon={
                  // Solid icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}