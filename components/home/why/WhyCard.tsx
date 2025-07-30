import { WhyCardProps } from "@/types/why";

export default function WhyCard({
  Icon, 
  children, 
  desc
}: WhyCardProps) {
  return (
    <div className="bg-white90 border border-white75 py-8 px-8 rounded-lg">
      <Icon className="text-primary w-8 h-8 sm:w-12 sm:h-12" />
      <h6 className="text-white10 text-h6 font-bold mt-8 sm:text-h5">
        {children}
      </h6>
      <p className="text-white25 text-p mt-4">
        {desc}
      </p>
    </div>
  );
}