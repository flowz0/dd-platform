import Image from "next/image";
import WaveDividerInAsset from "@/public/shapes/wave-divider-in.svg";

export default function WaveDividerIn() {
  return (
    <div className="h-[512px] w-full">
      <Image
        src={WaveDividerInAsset}
        alt="Wave divider svg"
        className="w-full h-full object-cover"
      />
    </div>
  );
}