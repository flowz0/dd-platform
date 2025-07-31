import Image from "next/image";
import Button from "../ui/Button";
import PlaceholderImg from "@/public/placeholder/1920x1080.svg";
import { BlogProps } from "@/types/blog";
import formatDate from "@/lib/formatDate";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

interface BlogCardProps {
  blog: BlogProps;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const slug = slugify(blog.title);
  const url = `/blog/${slug}-${blog._id}`;

  return (
    <div aria-labelledby={`blog-title-${blog._id}`}>
      <div>
        <Image
          src={blog.img || PlaceholderImg}
          alt={`${blog.title} blog image`}
          height={1920}
          width={1080}
          className="w-full h-64 object-cover rounded-lg"
          loading="eager"
          priority={true}
          draggable={false}
        />
        <div className="flex items-center justify-between mt-2">
          <p className="text-white25 text-small">
            {blog.author}
          </p>
          <p className="text-white25 text-small">
            {formatDate(blog.createdAt!)}
          </p>
        </div>
        <h6 className="text-white10 text-h6 font-bold line-clamp-2 mt-2">
          {blog.title}
        </h6>
        <p className="text-white25 text-p line-clamp-3 mt-4">
          {blog.summary}
        </p>
        <Link href={url}>
          <Button size="sm" variant="outlined" className="mt-6">
            Read blog
          </Button>
        </Link>
      </div>
    </div>
  );
}