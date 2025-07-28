import Image, { StaticImageData } from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface ServiceAboutProps {
  img: StaticImageData;
  service: string;
  desc: string;
  cta: string;
}

export default function ServiceAboutSection({ img, service, desc, cta }: ServiceAboutProps) {
  return (
    <section className="max-w-7xl mx-auto pt-48 px-6 sm:pt-64">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:items-center md:gap-x-16">
        <div className="order-2 mt-16 md:mt-0 md:order-1">
          <Image
            src={img}
            alt={`${service} service about image`}
            className="h-[480px] w-full object-cover object-top-right rounded-4xl"
            draggable={false}
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="md:order-2">
          <p className="text-primary text-small">
            Duct Daddy Duct Cleaning Service
          </p>
          <h2 className="text-white10 text-h4 font-bold mt-4 sm:text-h2">
            {service}
          </h2>
          <p className="text-white25 text-p mt-4">
            {desc}
          </p>
          <Link href="/booking">
            <Button variant="primary" className="mt-8">{cta}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}