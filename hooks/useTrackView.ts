"use client";

import { useEffect } from "react";
import axios from "axios";

export default function TrackView({ slug }: { slug: string }) {
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!slug) return;

    const increment = async () => {
      try {
        await axios.post(`${api}/api/views/${slug}`);
        // No need to store state or show anything
      } catch (error) {
        console.error("Error incrementing view count:", error);
      }
    };

    increment();
  }, [slug, api]);

  return null; // nothing rendered
}