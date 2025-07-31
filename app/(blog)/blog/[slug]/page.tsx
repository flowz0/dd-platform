import BlogFeatures from "@/components/(blog)/BlogFeatures";
import Image from "next/image";
import BlogSection from "@/components/(blog)/BlogSection";
import { getBlogById } from "@/lib/blogs";
import { notFound, redirect } from "next/navigation";
import { slugify } from "@/lib/slugify";
import { extractIdFromSlug } from "@/lib/extractidFromSlug";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const id = extractIdFromSlug(resolvedParams.slug);
  const blog = await getBlogById(id);

  return {
    title: `${blog?.title} - Blog`,
    description: blog?.summary,
  };
}

export default async function Blog({
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
    redirect(`/blog/${correctSlug}`);
  }

  return (
    <div className="pt-32 max-w-7xl px-6 mx-auto sm:pt-48">
      <div className="flex flex-col items-center">
        <h1 className="text-white10 text-h3 font-bold text-center max-w-5xl sm:text-h1">
          {blog.title}
        </h1>
        <BlogFeatures
          author={blog.author!}
          date={blog.createdAt!}
          readTime={blog.readTime}
        />
        <Image
          src={blog.img}
          alt={`${blog.title} blog image`}
          height={1920}
          width={1080}
          className="mt-12 aspect-[16/9] h-full w-full object-cover rounded-lg md:mt-16"
          draggable={false}
          priority={true}
          loading="eager"
        />
        <div className="max-w-2xl mt-8">
          <section>
            <p className="text-white25 text-p mt-8">
              {blog.summary}
            </p>
          </section>
          <BlogSection desc={blog.paragraph}>
            {blog.header}
          </BlogSection>
          <BlogSection desc={blog.paragraph2}>
            {blog.header2}
          </BlogSection>

          {/* optional sections */}
          {blog.header3 && blog.paragraph3 && (
            <BlogSection desc={blog.paragraph3}>
              {blog.header3}
            </BlogSection>
          )}
          {blog.header4 && blog.paragraph4 && (
            <BlogSection desc={blog.paragraph4}>
              {blog.header4}
            </BlogSection>
          )}
          {blog.header5 && blog.paragraph5 && (
            <BlogSection desc={blog.paragraph5}>
              {blog.header5}
            </BlogSection>
          )}
        </div>
      </div>
    </div>
  );
}