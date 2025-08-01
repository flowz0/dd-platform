import EditBlogForm from "@/components/forms/EditBlog";
import { getBlogById } from "@/lib/blogs";
import { extractIdFromSlug } from "@/lib/extractidFromSlug";
import { slugify } from "@/lib/slugify";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const id = extractIdFromSlug(resolvedParams.slug);
  const blog = await getBlogById(id);

  return {
    title: `Edit blog: ${blog?.title}`,
    description: blog?.summary,
  };
}

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const id = extractIdFromSlug(slug);

  const blog = await getBlogById(id);
  if (!blog) return notFound();

  // Enforce correct slug for SEO
  const correctSlug = `${slugify(blog.title)}-${blog._id}`;
  if (slug !== correctSlug) {
    redirect(`/manage-blog/edit/${correctSlug}`);
  }

  return (
    <div className="pt-32 pb-16 px-6 lg:pt-16">
      <div className="flex flex-col items-center">
        <div className="w-full lg:max-w-[800px]">
          <div className="flex items-center justify-between">
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
      </div>
    </div>
  );
}