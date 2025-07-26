"use client";

import Image from "next/image";
import Button from "../ui/Button";
import KansasCityImg from "@/public/assets/kansas-city.png";
import DuctDaddyVanImg from "@/public/assets/duct-daddy-vehicle-shadow.png";

export default function Hero() {
  return (
    <div>
      <Image
        src={KansasCityImg}
        alt="Kansas city, Missouri image"
        className="h-[920px] w-full object-cover sm:h-[880px]"
        priority={true}
        loading="eager"
        quality={100}
      />

      <div className="absolute inset-0 z-10 h-[920px] sm:h-[880px]">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex flex-col items-center justify-between h-full">
            <div className="pt-32 flex flex-col items-center">
              <h1 className="text-white10 text-h2 font-bold text-center sm:text-h1">
                Kansas City&apos;s Trusted {" "}
                <br className="hidden sm:inline-block" />
                Air Duct & Dryer Vent {" "}
                <br className="hidden sm:inline-block" />
                Cleaning Experts
              </h1>
              <Button variant="contained" className="mt-12">
                Book online
              </Button>
            </div>

            <div>
              <Image
                src={DuctDaddyVanImg}
                alt="Duct Daddy Duct Cleaning van image"
                className="relative w-fit h-full bottom-[-96px] sm:bottom-[-64px] lg:h-[600px]"
                priority={true}
                loading="eager"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}