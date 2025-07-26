import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiTiktok } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import DuctDaddyLogo from "@/public/assets/duct-daddy-logo.png";

export default function Footer() {
  return (
    <footer className="pt-48 pb-32 max-w-7xl mx-auto px-6 sm:pt-64">
      <div className="flex items-center w-full h-full">
        <div className="grid grid-cols-1 gap-y-12 w-full sm:grid-cols-2 sm:justify-between lg:grid-cols-4">
          <div className="flex flex-col justify-between w-fit">
            {/* brand */}
            <Link href="/">
              <Image
                src={DuctDaddyLogo}
                alt="Netflows brand"
                className="h-32 w-auto"
                quality={100}
                priority={false}
                draggable={false}
                loading="lazy"
              />
            </Link>
            <div className="mt-8 sm:mt-0">
              <p className="text-black75 text-small font-inter">
                ©2025 Duct Daddy, LLC.
              </p>
              <p className="text-black75 text-small font-inter">
                <Link href="/tos" className="transition-colors duration-300 ease-in-out hover:text-primary">Terms of Service</Link>
                {" "} | {" "}
                <Link href="/privacy" className="transition-colors duration-300 ease-in-out hover:text-primary">Privacy Policy</Link>
              </p>
            </div>
          </div>

          {/* services */}
          <div className="w-fit">
            <h6 className="text-black text-h6 font-bold font-nunito">
              Services
            </h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <Link href="/air-duct-cleaning" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                Air Duct Cleaning
              </Link>
              <Link href="/dryer-vent-cleaning" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                Dryer Vent Cleaning
              </Link>
              <Link href="/hvac-cleaning" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                HVAC Cleaning
              </Link>
            </div>
          </div>

          {/* useful links */}
          <div className="w-fit">
            <h6 className="text-black text-h6 font-bold font-nunito">
              Useful Links
            </h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <Link href="/about" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                About Us
              </Link>
              <Link href="/booking" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                Booking
              </Link>
              <Link href="/blog" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                Blog
              </Link>
            </div>
          </div>

          {/* get in touch */}
          <div className="w-fit">
            <h6 className="text-black text-h6 font-bold font-nunito">
              Get In Touch
            </h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <p className="text-black75 text-p font-inter">
                Questions or feedback?
              </p>
              <p className="text-black75 text-p font-inter">
                We&apos;d love to hear from you.
              </p>
            </div>
            <div className="mt-12 flex gap-x-6">
              <Link href="https://www.facebook.com/ductdaddykc/" className="transition-colors duration-300 ease-in-out hover:text-primary">
                <SiFacebook className="w-8 h-8" />
              </Link>
              <Link href="https://www.tiktok.com/@ductdaddykc" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-primary">
                <SiTiktok className="w-8 h-8" />
              </Link>
              <Link href="https://www.google.com/maps/place/Duct+Daddy+Duct+Cleaning/@39.0293009,-94.121473,17z/data=!3m1!4b1!4m6!3m5!1s0x87c113eb4a122715:0xb52bc5120c0f274!8m2!3d39.0293009!4d-94.121473!16s%2Fg%2F11kqf72rlp?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" className="transition-colors duration-300 ease-in-out hover:text-primary">
                <FaGoogle className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}