import { WhyCardProps } from "@/types/why";

export default function WhyCard({
  Icon, 
  children, 
  desc
}: WhyCardProps) {
  return (
    <div className="bg-white90 py-8 px-8 rounded-lg">
      <Icon className="w-8 h-8" />
      <h4 className="text-white10 text-h5 font-bold mt-8 sm:text-h4">
        {children}
      </h4>
      <p className="text-white25 text-p mt-4">
        {desc}
      </p>
    </div>
  );
}