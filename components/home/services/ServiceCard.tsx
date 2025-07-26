import Button from "@/components/ui/Button";
import { ServiceCardProps } from "@/types/service";

export default function ServiceCard({
  Icon, 
  children, 
  desc
}: ServiceCardProps) {
  return (
    <div className="bg-white90 py-8 px-8 rounded-lg">
      <div>
        <Icon className="w-16 h-16" />
      </div>
      <h4 className="text-white10 text-h5 font-bold mt-8 sm:text-h4">
        {children}
      </h4>
      <p className="text-white25 text-p mt-4">
        {desc}
      </p>
      <Button variant="outlined" className="mt-8">
        Read more
      </Button>
    </div>
  );
}