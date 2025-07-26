import Image from "next/image";
import WaveDividerOutAsset from "@/public/shapes/wave-divider-out.svg";

export default function WaveDividerOut() {
  return (
    <div className="h-[512px] w-full">
      <Image
        src={WaveDividerOutAsset}
        alt="Wave divider svg"
        className="w-full h-full object-cover"
      />
    </div>
  );
}