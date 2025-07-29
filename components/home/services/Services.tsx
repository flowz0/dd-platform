import ServiceCard from "./ServiceCard";
import { LuWind, LuRotateCcw, LuFan } from "react-icons/lu";

export default function ServicesSection() {
  return (
    <div className="pt-48 max-w-7xl mx-auto px-6 sm:pt-64">
      <h2 className="text-white10 text-h3 font-bold sm:text-h2">
        Our Services
      </h2>
      <p className="text-white25 text-p mt-4 max-w-lg">
        Discover top-tier air duct cleaning, dryer vent cleaning, and HVAC cleaning services from Duct Daddy, your trusted experts in maintaining clean, efficient, and safe home systems.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:grid-cols-3">
        <ServiceCard
        link="/service/air-duct-cleaning"
          Icon={LuWind}
          desc="Clean vents, trunk lines, and furnace using powerful negative air machines and rotary brushes."
        >
          Air Duct Cleaning
        </ServiceCard>
        <ServiceCard
        link="/service/dryer-vent-cleaning"
          Icon={LuRotateCcw} 
          desc="Thorough lint and debris removal from your dryer vent to prevent fires, speed up drying, and reduce energy costs."
        >
          Dryer Vent Cleaning
        </ServiceCard>
        <ServiceCard
        link="/service/hvac-cleaning"
          Icon={LuFan} 
          desc="Seasonal tune-ups to boost efficiency, extend HVAC lifespan, and prevent costly repairs."
        >
          HVAC Cleaning
        </ServiceCard>
      </div>
    </div>
  );
}