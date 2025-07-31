"use client";

import { getAllBlogs } from "@/lib/blogs";
import { BlogProps } from "@/types/blog";
import BlogCard from "./BlogCard";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function AllBlogs() {
  const [allBlogs, setAllBlogs] = useState<BlogProps[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const blogGridTopRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs();
        const sorted = blogs
          .filter((b): b is BlogProps => !!b.createdAt)
          .sort(
            (a, b) =>
              new Date(b.createdAt!).getTime() -
              new Date(a.createdAt!).getTime()
          );
        setAllBlogs(sorted);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (isScrollingRef.current && blogGridTopRef.current) {
      blogGridTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      isScrollingRef.current = false;
    }
  }, [visibleCount]);

  const visibleBlogs = allBlogs.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev += 6);
  };

  const handleShowLess = () => {
    if (visibleCount > 3) {
      isScrollingRef.current = true;
      setVisibleCount(3);
    }
  };

  return (
    <div ref={blogGridTopRef}>
      <div className="grid grid-cols-1 gap-y-12 mt-4 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3">
        {visibleBlogs.map((blog) => (
          <div key={blog._id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        {visibleCount < allBlogs.length && (
          <Button 
            Icon={FaAngleDown} 
            variant="text"
            onClick={handleShowMore}
          >
            Show more blogs
          </Button>
        )}
        {visibleCount > allBlogs.length && (
          <Button 
            Icon={FaAngleUp} 
            variant="text"
            onClick={handleShowLess}
          >
            Show less blogs
          </Button>
        )}
      </div>
    </div>
  );
}