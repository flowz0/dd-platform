import CreateBlogForm from "@/components/forms/CreateBlog";

export default function CreateBlogPage() {
  return (
    <div className="py-20 px-6 lg:py-12">
      <h1 className="text-white10 text-h4 font-bold lg:text-h3">
        Create a blog
      </h1>
      <p className="text-white25 text-p mt-4">
        Fill out the required fields to post a blog.
      </p>

      <CreateBlogForm />
    </div>
  );
}