"use client";

import { BlogProps } from "@/types/blog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import formatDate from "@/lib/formatDate";
import Link from "next/link";
import DeleteBlogBtn from "./DeleteBlogBtn";
import axios from "axios";
import { slugify } from "@/lib/slugify";

export default function BlogTable() {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = async () => {
    try {
      const blogsRes = await axios.get(`${api}/api/blogs`, {
        withCredentials: true,
      });

      const sorted = blogsRes.data
        .filter((b: BlogProps) => !!b.createdAt)
        .sort(
          (a: BlogProps, b: BlogProps) =>
            new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
        );

      setBlogs(sorted);
    } catch (error) {
      console.error("Unauthorized or error fetching blogs", error);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const refetchBlogs = fetchData;

  if (loading) return <LoadingSpinner />;

  return (
    <div className="h-[560px] lg:h-[600px] overflow-y-auto mt-16">
      <table className="w-full overflow-y-auto h-[400px]">
        <thead className="border-b border-white50 bg-white90/40">
          <tr>
            <th className="w-64 text-start py-4 px-6 text-small font-bold">Title</th>
            <th className="w-80 text-start py-4 px-6 text-small font-bold">Summary</th>
            <th className="w-48 text-start py-4 px-6 text-small font-bold">Date created</th>
            <th className="w-32 text-start py-4 px-6 text-small font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              const slug = `${slugify(blog.title)}-${blog._id}`;
              const id = `${blog._id}`;
              return (
                <tr key={blog._id} className="even:bg-white90/40 even:text-white25 odd:bg-white75/40 odd:text-white10">
                  <td className="py-4 px-6 font-p truncate max-w-0">
                    <Link href={`/blog/${slug}`} target="_blank">
                      {blog.title}
                    </Link>
                  </td>
                  <td className="py-4 px-6 font-p truncate max-w-0">
                    {blog.summary}
                  </td>
                  <td className="py-4 px-6 font-p">
                    {formatDate(blog.createdAt!)}
                  </td>
                  <td className="py-4 px-6 font-p">
                    <div className="space-x-4">
                      <Link href={`/manage-blog/edit/${slug}`} className="hover:text-primary">
                        <button className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                          </svg>
                        </button>
                      </Link>
                      <DeleteBlogBtn deleteHref={id} ariaLabel={blog.title} refetchBlogs={refetchBlogs} />
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4 px-8 text-white25 font-p">
                No blogs found. Create a blog to view them here.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}