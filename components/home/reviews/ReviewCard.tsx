import Image, { StaticImageData } from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface ReviewCardProps {
  review: string;
  reviewer: string;
  avatar: StaticImageData;
}

export default function ReviewCard({
  review,
  reviewer,
  avatar
}: ReviewCardProps) {
  return (
    <div className="border border-black75 py-8 px-8 rounded-2xl w-[400px] cursor-default">
      <div className="bg-secondary text-white95 p-4 rounded-full w-fit">
        <FaQuoteLeft className="w-4 h-4" />
      </div>
      <p className="text-white10 text-p mt-8">
        {review}
      </p>
      <div className="mt-8 flex items-center gap-x-4">
        <Image
          src={avatar}
          alt="Review avatar"
          className="h-12 w-12 object-cover object-top rounded-full"
          draggable={false}
          priority={false}
          quality={75}
          loading="lazy"
        />
        <div className="flex flex-col">
          <h6 className="text-white10 text-p">{reviewer}</h6>
          <div className="flex items-center gap-x-0.5">
            <FaStar className="text-amber-300 h-4 w-4" />
            <FaStar className="text-amber-300 h-4 w-4" />
            <FaStar className="text-amber-300 h-4 w-4" />
            <FaStar className="text-amber-300 h-4 w-4" />
            <FaStar className="text-amber-300 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}