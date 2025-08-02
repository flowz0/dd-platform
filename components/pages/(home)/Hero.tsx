"use client";

import Image from "next/image";
import KansasCityImg from "@/public/assets/kansas-city.png";
import DuctDaddyVanImg from "@/public/assets/duct-daddy-vehicle-shadow.png";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { FaCalendarAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      <Image
        src={KansasCityImg}
        alt="Kansas city, Missouri image"
        className="h-[880px] w-full object-cover sm:h-[1000px]"
        priority={true}
        loading="eager"
        quality={100}
        draggable={false}
      />

      <div className="absolute inset-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex flex-col items-center justify-between h-full">
            <div className="pt-32 flex flex-col items-center sm:pt-48">
              <h1 className="text-white10 text-h3 font-bold text-center sm:text-h1">
                Kansas City&apos;s Trusted {" "}
                <br className="hidden sm:inline-block" />
                Air Duct & Dryer Vent {" "}
                <br className="hidden sm:inline-block" />
                Cleaning Experts
              </h1>
              <Link href={"/booking"} className="mt-8">
                <Button Icon={FaCalendarAlt} iconAlign iconSize="size-5" variant="primary">
                  Book Your Cleaning Today
                </Button>
              </Link>
            </div>

            <Image
              src={DuctDaddyVanImg}
              alt="Duct Daddy Duct Cleaning van image"
              className="relative w-full h-auto bottom-[-160px] sm:bottom-[-360px] md:bottom-[-320px] lg:bottom-[-256px]"
              priority={true}
              loading="eager"
              quality={100}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}