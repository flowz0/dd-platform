import Button from "@/components/ui/Button";
import Image from "next/image";
import DuctDaddyVanImg from "@/public/assets/dd-vehicle.png";

interface BookingHeroProps {
  handleClick?: () => void;
}

export default function BookingHeroSection({handleClick}: BookingHeroProps) {
  return (
    <div className="pt-48 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:items-center">
      <div className="px-6 lg:pr-0">
        <p className="text-primary text-small">
          Book Your Duct Cleaning Service
        </p>
        <h1 className="text-white10 text-h2 font-bold mt-2 sm:text-h1">
          Fresh, Clean Air Is Just One Click Away
        </h1>
        <p className="text-white25 text-p max-w-lg mt-4">
          Schedule your air duct, dryer vent, or HVAC cleaning in minutes. Choose a time that works best for you and let our trusted Kansas City team handle the rest.
        </p>
        <Button
          onClick={handleClick}
          variant="primary"
          className="mt-8"
        >
          Book HVAC Cleaning Today
        </Button>
      </div>

      <div>
        <Image
          src={DuctDaddyVanImg}
          alt="Duct daddy brand vehicle hero image"
          className="w-full h-auto object-cover"
          draggable={false}
          priority={true}
          loading="eager"
        />
      </div>
    </div>
  );
}