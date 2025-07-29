import AllBlogs from "@/components/blog/AllBlogs";

export default function BlogsPage() {
  return (
    <div className="pt-48 max-w-7xl px-6 mx-auto">
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
        <h3 className="text-white10 text-h4 font-bold sm:text-h3">
          All blogs
        </h3>

        <AllBlogs />
      </div>
    </div>
  );
}