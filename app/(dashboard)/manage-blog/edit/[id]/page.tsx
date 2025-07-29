import EditBlogForm from "@/components/forms/EditBlog";
import { getBlogById } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const blog = await getBlogById(id);

  if (!blog) return notFound();
  return (
    <div className="py-20 px-6 lg:py-12">
      <h1 className="text-white10 text-h4 font-bold lg:text-h3">
        Edit blog
      </h1>
      <p className="text-white25 text-p mt-4">
        Need to make any changes to the blog? Edit the blog and save for changes to be applied.
      </p>

      <EditBlogForm initialData={blog} />
    </div>
  );
}