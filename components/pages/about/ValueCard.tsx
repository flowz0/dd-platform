import { ValueCardProps } from "@/types/value";

export default function ValueCard({
  Icon,
  children,
  desc
}: ValueCardProps) {
  return (
    <div className="rounded-lg">
      <div className="flex flex-col items-center">
        <div className="bg-primary p-3 rounded-lg w-fit">
          <Icon className="text-white95 h-6 w-6" />
        </div>
        <h5 className="text-white10 text-h6 font-bold text-center mt-8 sm:text-h5">
          {children}
        </h5>
        <p className="text-white25 text-p text-center mt-4">
          {desc}
        </p>
      </div>
    </div>
  );
}