"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface PageViewsProps {
  slug: string;
}

export default function PageViews({ slug }: PageViewsProps) {
  const [views, setViews] = useState<number | null>(null);
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    let isMounted = true;

    const incrementViews = async () => {
      try {
        const res = await axios.post(`${api}/api/views/${slug}`);
        // Axios response is already JSON parsed
        const data = res.data;

        if (isMounted) {
          setViews(data.views);
        }
      } catch (error) {
        console.error("Error updating page views:", error);
      }
    };

    incrementViews();

    return () => {
      isMounted = false;
    };
  }, [slug, api]);

  return (
    <p className="text-sm text-gray-500">
      {views !== null ? `${views} views` : "Loading..."}
    </p>
  );
}