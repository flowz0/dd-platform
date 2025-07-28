import Button from "@/components/ui/Button";
import Image from "next/image";
import DuctDaddyVanImg from "@/public/assets/dd-vehicle.png";

interface ServiceHeroProps {
  service: string;
  desc: string;
  cta: string;
}

export default function ServiceHeroSection({ service, desc, cta }: ServiceHeroProps) {
  return (
    <div className="pt-48 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:items-center">
      <div className="px-6 lg:pr-0">
        <p className="text-primary text-small">
          Duct Daddy Duct Cleaning Service
        </p>
        <h1 className="text-white10 text-h2 font-bold mt-2 sm:text-h1">
          {service}
        </h1>
        <p className="text-white25 text-p max-w-lg mt-4">
          {desc}
        </p>
        <Button variant="primary" className="mt-8">
          {cta}
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