import AllBlogs from "@/components/(blog)/AllBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duct Cleaning Tips & HVAC Advice - Blog",
  description: "Stay informed with expert tips on air duct cleaning, dryer vent maintenance, and HVAC care. The Duct Daddy Blog helps Kansas City homeowners breathe cleaner, safer air year-round.",
};

export default function BlogsPage() {
  return (
    <div className="pt-32 max-w-7xl px-6 mx-auto sm:pt-48">
      <div className="flex flex-col items-center">
        <p className="bg-primary/20 text-primary text-p px-5 py-1 rounded-full text-center">Duct Daddy Duct Cleaning&apos;s Blog</p>
        <h1 className="text-white10 text-h2 font-bold text-center mt-4 sm:text-h1">
          Fresh Insights for a Cleaner Home
        </h1>
        <p className="text-white25 text-p text-center max-w-3xl mt-4">
          Explore expert tips, seasonal advice, and must-know facts about air quality, duct maintenance, and home comfort straight from Kansas City&apos;s duct cleaning professionals.
        </p>
      </div>

      <div className="mt-32">
        <h4 className="text-white10 text-h5 font-bold sm:text-h4">
          All blogs
        </h4>

        <AllBlogs />
      </div>
    </div>
  );
}