import { AreaCardProps } from "@/types/area";
import { FaMapPin } from "react-icons/fa";

export default function AreaCard({ children, className }: AreaCardProps) {
  return (
    <div className={`${className} flex items-center gap-x-2 group`}>
      <FaMapPin className="text-secondary h-6 w-6 sm:h-8 sm:w-8" />
      <p className="text-white10 text-small group-hover:text-secondary sm:text-p">
        {children}
      </p>
    </div>
  );
}