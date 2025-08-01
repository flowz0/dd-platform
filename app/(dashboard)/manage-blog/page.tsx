import Link from "next/link";
import { Metadata } from "next";
import BlogTable from "@/components/pages/(dashboard)/blog/BlogTable";
import BlogCards from "@/components/pages/(dashboard)/blog/BlogCards";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your Duct Daddy website from the dashboard. Create and edit blog posts, monitor content, and streamline updates from one secure panel.",
};

export default function ManageBlogPage() {
  return (
    <div className="pt-32 pb-16 px-6 lg:pt-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
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
          className="flex items-center gap-x-2 rounded-lg text-p cursor-pointer py-3 px-6 w-fit mt-8 lg:mt-0 bg-primary text-white95 transition-transform duration-300 delay-150 ease-in-out hover:-translate-y-1 active:-translate-y-0"
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