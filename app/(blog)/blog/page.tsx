import BlogCard from "@/components/blog/BlogCard";
import Button from "@/components/ui/Button";

export default function BlogPage() {
  return (
    <div className="pt-48 max-w-7xl px-6 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-white10 text-h2 font-bold text-center sm:text-h1">
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

        <div className="grid grid-cols-1 gap-y-6 mt-4 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="text">Show more blogs</Button>
        </div>
      </div>
    </div>
  );
}