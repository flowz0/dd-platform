import Button from "@/components/ui/Button";
import { ServiceCardProps } from "@/types/service";
import Link from "next/link";

export default function ServiceCard({
  Icon,
  children,
  desc,
  link
}: ServiceCardProps) {
  return (
    <div className="bg-white90 border border-white75 py-8 px-8 rounded-lg">
      <div>
        <Icon className="text-primary w-12 h-12 sm:w-16 sm:h-16" />
      </div>
      <h4 className="text-white10 text-h5 font-bold mt-8 sm:text-h4">
        {children}
      </h4>
      <p className="text-white25 text-p mt-4">
        {desc}
      </p>
      <Link href={link}>
        <Button size="sm" variant="outlined" className="mt-8">
          Read more
        </Button>
      </Link>
    </div>
  );
}