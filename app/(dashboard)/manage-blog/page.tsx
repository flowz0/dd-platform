import BlogCards from "@/components/dashboard/BlogCards";
import BlogTable from "@/components/dashboard/BlogTable";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your Duct Daddy website from the dashboard. Create and edit blog posts, monitor content, and streamline updates from one secure panel.",
};

export default function ManageBlogPage() {
  return (
    <div className="pt-20 px-6 lg:pt-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-white10 text-h4 font-bold lg:text-h3">
            Blogs
          </h1>
          <p className="text-white25 text-p mt-4">
            Manage your blogs here. Create, view, update, or delete any blog.
          </p>
        </div>
        <Link
          href={"/manage-blog/create"}
          className="flex items-center gap-x-2 rounded-lg text-p cursor-pointer py-4 px-8 w-fit mt-8 md:mt-0 bg-primary text-white95 hover:shadow-lg hover:shadow-primary/20"
        >
          Create blog
        </Link>
      </div>

      <div className="hidden md:block">
        <BlogTable />
      </div>
      <div className="md:hidden">
        <BlogCards />
      </div>
    </div>
  );
}