"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import DashboardBlogCard from "./DashboardBlogCard";
import { BlogProps } from "@/types/blog";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function BlogCards() {
  const [authorized, setAuthorized] = useState(false);
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = async () => {
    try {
      await axios.get(`${api}/api/auth/check`, {
        withCredentials: true,
      });

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
      setAuthorized(true);
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
  if (!authorized) return null;

  return (
    <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-6">
      {blogs.length > 0 ? (
        blogs.map((blog) => {
          const id = `${blog._id}`;

          return (
            <DashboardBlogCard
              key={id}
              title={blog.title}
              summary={blog.summary}
              date={blog.createdAt!}
              href={id}
              refetchBlogs={refetchBlogs}
            />
          );
        }
        )) : (
        <p>Create a blog to view them here.</p>
      )}
    </section>
  );
}