import Image from "next/image";
import WhyCard from "./WhyCard";
import { LuUsers, LuBadgeCheck } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

import GoogleLogo from "@/public/home/Google.png";

export default function WhyUsSection() {
  return (
    <div className="pt-48 max-w-7xl mx-auto px-6 sm:pt-64">
      <div className="grid grid-cols-1 lg:gap-x-6 lg:grid-cols-2">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <h2 className="text-white10 text-h3 font-bold sm:text-h2">
              Why Choose
              <br />
              Duct Daddy
            </h2>
            <p className="text-white25 text-p mt-4 max-w-xl">
              When it comes to air duct cleaning, dryer vent cleaning, and HVAC cleaning, Duct Daddy stands out as your trusted partner for cleaner, safer, and more efficient homes. With years of expertise and a commitment to excellence, we deliver results that prioritize your family&apos;s health and your system&apos;s performance.
            </p>
          </div>

          <div className="mt-16 flex items-center gap-x-4 lg:mt-0">
            <Image
              src={GoogleLogo}
              alt="Google logo"
              className="h-20 w-fit"
              priority={false}
              quality={80}
              draggable={false}
            />
            <div>
              <p className="text-white10 text-p font-medium">
                Reviews
              </p>
              <div className="flex items-center gap-x-0.5">
                <FaStar className="text-amber-300 h-6 w-6" />
                <FaStar className="text-amber-300 h-6 w-6" />
                <FaStar className="text-amber-300 h-6 w-6" />
                <FaStar className="text-amber-300 h-6 w-6" />
                <FaStar className="text-amber-300 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-0">
          <WhyCard Icon={LuUsers} desc="Trained professionals with years of experience.">
            Expert Technicians
          </WhyCard>
          <WhyCard Icon={LuBadgeCheck} desc="Industry certifications and a proven track record.">
            Certified & Trusted
          </WhyCard>
          <WhyCard Icon={LuBadgeCheck} desc="Industry certifications and a proven track record.">
            Certified & Trusted
          </WhyCard>
          <WhyCard Icon={LuUsers} desc="Trained professionals with years of experience.">
            Expert Technicians
          </WhyCard>
        </div>
      </div>
    </div>
  );
}