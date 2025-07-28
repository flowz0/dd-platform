import BlogFeatures from "@/components/blog/BlogFeatures";
import Image from "next/image";
import PlaceholderImg from "@/public/placeholder/1920x1080.svg";
import BlogSection from "@/components/blog/BlogSection";

export default function Blog() {
  return (
    <div className="pt-48 max-w-7xl px-6 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-white10 text-h3 font-bold text-center sm:text-h1">
          Importance of Dryer Vent Cleaning Before Kansas City Winters
        </h1>
        <BlogFeatures />
        <Image
          src={PlaceholderImg}
          alt="Blog image"
          height={1920}
          width={1080}
          className="mt-12 aspect-[16/9] h-full w-full object-cover rounded-lg md:mt-16"
          draggable={false}
          priority={true}
          loading="eager"
        />
        <div className="max-w-2xl mt-8">
          <section>
            <p className="text-white25 text-p mt-8">
              As Kansas City winters approach, dryer vent clogs become a bigger risk for fires and inefficiency. Learn why cleaning now prevents hazards, saves money, and keeps your home safe during the cold months when laundry loads increase.
            </p>
          </section>
          <BlogSection desc="Winter means more laundry from bulky clothes and blankets, but clogged vents trap lint that&apos;s highly flammable, increasing fire risks. In Kansas City, where dry indoor air from heating systems accelerates buildup, neglected vents cause thousands of home fires annually nationwide. Professional dryer vent cleaning removes this lint thoroughly, reducing dangers especially when dryers run longer in the cold. For local households, this preventive step is crucial to avoid emergencies during peak usage seasons.">
            Preventing Fire Hazards in Cold Weather
          </BlogSection>
          <BlogSection desc="Clogged vents force dryers to work harder, spiking energy bills and wearing out the appliance faster. In KC&apos;s harsh winters, this inefficiency hits harder with higher utility costs. Cleaning clears blockages, shortening dry times and extending your dryer&apos;s life. Plus, it prevents overheating that could lead to repairs. Opting for dryer vent cleaning services in Kansas City before the freeze ensures smooth operation, lower expenses, and peace of mind through the snowy months.">
            Boosting Efficiency and Avoiding Costly Issues
          </BlogSection>

          {/* optional sections */}
          <BlogSection desc="Clogged vents force dryers to work harder, spiking energy bills and wearing out the appliance faster. In KC&apos;s harsh winters, this inefficiency hits harder with higher utility costs. Cleaning clears blockages, shortening dry times and extending your dryer&apos;s life. Plus, it prevents overheating that could lead to repairs. Opting for dryer vent cleaning services in Kansas City before the freeze ensures smooth operation, lower expenses, and peace of mind through the snowy months.">
            Boosting Efficiency and Avoiding Costly Issues
          </BlogSection>
          <BlogSection desc="Clogged vents force dryers to work harder, spiking energy bills and wearing out the appliance faster. In KC&apos;s harsh winters, this inefficiency hits harder with higher utility costs. Cleaning clears blockages, shortening dry times and extending your dryer&apos;s life. Plus, it prevents overheating that could lead to repairs. Opting for dryer vent cleaning services in Kansas City before the freeze ensures smooth operation, lower expenses, and peace of mind through the snowy months.">
            Boosting Efficiency and Avoiding Costly Issues
          </BlogSection>
          <BlogSection desc="Clogged vents force dryers to work harder, spiking energy bills and wearing out the appliance faster. In KC&apos;s harsh winters, this inefficiency hits harder with higher utility costs. Cleaning clears blockages, shortening dry times and extending your dryer&apos;s life. Plus, it prevents overheating that could lead to repairs. Opting for dryer vent cleaning services in Kansas City before the freeze ensures smooth operation, lower expenses, and peace of mind through the snowy months.">
            Boosting Efficiency and Avoiding Costly Issues
          </BlogSection>
        </div>
      </div>
    </div>
  );
}