import Image from "next/image";
import DuctDaddyVan from "@/public/assets/duct-daddy-vehicle.png";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <div className="pt-48 max-w-7xl mx-auto md:px-6 md:pt-64">
      <div className="bg-linear-to-r from-[#0080DB] to-[#0068B2] h-[640px] py-16 flex flex-col sm:rounded-2xl md:py-16 md:pl-16 md:flex-row md:items-center md:h-[400px]">
        <div className="px-6 md:px-0 md:w-1/2">
          <h3 className="text-white95 text-h4 font-bold sm:text-h3">
            Breath Without Worries
          </h3>
          <p className="text-white90 text-p mt-4">
            Enjoy cleaner air and a healthier home with expert duct cleaning from Kansas City&apos;s trusted pros. Schedule your service today and feel the difference in every breath.
          </p>

          <Button variant="secondary" className="mt-8">Book online</Button>
        </div>

        <div className="md:w-1/2 relative">
          <Image
            src={DuctDaddyVan}
            alt="Duct Daddy van image"
            className="absolute h-fit top-16 object-left object-cover w-full md:h-[280px] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
            draggable={false}
            priority={false}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}