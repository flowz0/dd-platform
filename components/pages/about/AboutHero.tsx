import Button from "@/components/ui/Button";
import Image from "next/image";
import DuctDaddyVanImg from "@/public/assets/dd-vehicle.png";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <div className="pt-48 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:items-center">
      <div className="px-6 lg:pr-0">
        <p className="text-primary text-small">
          About Duct Daddy Duct Cleaning
        </p>
        <h1 className="text-white10 text-h2 font-bold mt-2 sm:text-h1">
          Kansas City&apos;s Trusted Air Duct & Dryer Vent Cleaning Experts
        </h1>
        <p className="text-white25 text-p max-w-lg mt-4">
          Family-owned and operated, Duct Daddy has been improving indoor air quality in Kansas City and surrounding areas since 2023. Our mission is simple: cleaner ducts, healthier homes, and happier families.
        </p>
        <Link href="/booking">
          <Button variant="primary" className="mt-8">Book HVAC Cleaning Today</Button>
        </Link>
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