import Image from "next/image";
import Areas from "./Areas";
import ServiceAreaImg from "@/public/home/service-area.png";

export default function ServiceAreaSection() {
  return (
    <div className="pt-48 max-w-7xl mx-auto px-6 sm:pt-64">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex flex-col lg:w-1/2 lg:order-2">
          <h3 className="text-white10 text-h4 font-bold sm:text-h2">
            Proudly Serving Kansas City {" "}
            <br className="hidden sm:inline-block lg:hidden" />
            and Surrounding Areas
          </h3>
          <Areas />
          <p className="text-white25 text-p mt-8 max-w-2xl">
            Looking for trusted air duct cleaning or dryer vent services near you? Duct Daddy proudly serves homeowners and businesses across the KC metro. Whether you&apos;re in Missouri or Kansas, we&apos;re just a call away.
          </p>
        </div>

        <div className="lg:w-1/2">
          <Image
            src={ServiceAreaImg}
            alt="Service area image"
            className="mt-8 h-auto w-full lg:mt-0"
            draggable={false}
            priority={false}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}