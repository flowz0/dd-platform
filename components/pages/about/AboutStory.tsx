import Image from "next/image";
import AboutStoryImg from "@/public/about/aboutstory.jpg";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AboutStorySection() {
  return (
    <section className="max-w-7xl mx-auto pt-48 px-6 sm:pt-64">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:items-center md:gap-x-16">
        <div className="order-2 mt-16 md:mt-0 md:order-1">
          <Image
            src={AboutStoryImg}
            alt="About Duct Daddy Duct Cleaning story image"
            className="h-[600px] w-full object-cover object-top rounded-4xl"
            draggable={false}
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="md:order-2">
          <h2 className="text-white10 text-h4 font-bold sm:text-h2">
            Our Duct Daddy Duct Cleaning Story
          </h2>
          <p className="text-white25 text-p mt-4">
            Duct Daddy started as a family-owned business in Kansas City with one goal: to help our community breathe cleaner, healthier air. What began as a small local service has grown into a trusted name for professional duct and dryer vent cleaning across the metro. We take pride in serving our neighbors with honest, reliable work that improves air quality and safety in Kansas City homes and businesses.
          </p>
          <Link href={"/booking"}>
            <Button variant="primary" className="mt-8">Contact Us Today</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}