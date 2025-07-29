import EditBlogForm from "@/components/forms/EditBlog";
import { getBlogById } from "@/lib/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const blog = await getBlogById(id);

  if (!blog) return notFound();
  return (
    <div className="py-20 px-6 lg:py-12">
      <div className="flex items-center justify-between w-full md:w-[680px]">
        <h1 className="text-white10 text-h4 font-bold text-wrap lg:text-h3">
          Edit blog post
        </h1>
        <Link href={"/manage-blog"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white25 size-8">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      <p className="text-white25 text-p max-w-2xl mt-4">
        You can make updates to the blog post. Don&apos;t forget to save the blog for changes to be applied.
      </p>

      <EditBlogForm initialData={blog} />
    </div>
  );
}