import CreateBlogForm from "@/components/forms/CreateBlog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create blog post",
  description: "Manage your Duct Daddy website from the dashboard. Create and edit blog posts, monitor content, and streamline updates from one secure panel.",
};

export default function CreateBlogPage() {
  return (
    <div className="pt-32 pb-16 px-6 lg:pt-16">
      <div className="">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full lg:max-w-[800px]">
            <h1 className="text-white10 text-h4 font-bold text-wrap lg:text-h3">
              Create a blog post
            </h1>
            <Link href={"/manage-blog"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white25 size-8">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <p className="text-white25 text-p mt-4 w-full lg:max-w-[800px]">
            Fill out the required fields to post a blog.
          </p>

          <CreateBlogForm />
        </div>
      </div>
    </div>
  );
}