import Image from "next/image";
import Button from "../ui/Button";
import PlaceholderImg from "@/public/placeholder/1920x1080.svg";

export default function BlogCard() {
  return (
    <div>
      <div>
        <Image
          src={PlaceholderImg}
          alt="Blog image"
          height={1920}
          width={1080}
          className="w-full h-64 object-cover rounded-lg"
          loading="eager"
          priority={true}
          draggable={false}
        />
        <div className="flex items-center justify-between mt-2">
          <p className="text-white25 text-small">Karson Kolle</p>
          <p className="text-white25 text-small">July 18, 2025</p>
        </div>
        <h6 className="text-white10 text-h6 font-bold line-clamp-1 mt-2">
          Importance of Dryer Vent Cleaning something
        </h6>
        <p className="text-white25 text-p line-clamp-3 mt-4">
          As Kansas City winters approach, dryer vent clogs become a bigger risk for fires and inefficiency. Learn why cleaning now prevents hazards, saves money, and keeps your home safe extra lines to test wrap helllo yessir
        </p>
        <Button size="sm" variant="outlined" className="mt-6">
          Read blog
        </Button>
      </div>
    </div>
  );
}