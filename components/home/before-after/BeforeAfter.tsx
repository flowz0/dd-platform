import Carousel from "@/components/ui/Carousel";

import Image1 from "@/public/carousel/1.png";
import Image2 from "@/public/carousel/2.png";
import Image3 from "@/public/carousel/3.png";
import Image4 from "@/public/carousel/4.png";
import Image5 from "@/public/carousel/5.png";
import Image6 from "@/public/carousel/6.png";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6
];

export default function BeforeAfterSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto md:px-6">
        <div>
          <div className="flex flex-col items-center px-6 md:px-0">
            <h2 className="text-white10 text-h3 font-bold text-center sm:text-h2">
              See The Duct Daddy Difference
            </h2>
            <p className="text-white25 text-p text-center mt-4">
              Real photos from homes serviced in Oak Grove and all across Kansas City, Missouri.
            </p>
          </div>
        </div>
        <Carousel images={images} />
      </div>
    </div>
  );
}