import { ViewData } from "@/types/analytic";
import axios from "axios";
import { useEffect, useState } from "react";
import ViewsStatCard from "./ViewsStatCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function AnalyticsCards() {
  const [views, setViews] = useState<ViewData[]>([]);
  const [loading, setLoading] = useState(true);
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const res = await axios.get(`${api}/api/views`);
        setViews(res.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, [api]);

  if (loading) return <LoadingSpinner />;

  return (
    <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 gap-y-6">
      {views.length > 0 ? (
        views.map((view) => {
          return (
            <ViewsStatCard
              key={view.slug}
              slug={view.slug}
              count={view.count}
              lastViewed={view.lastViewed}
            />
          );
        }
        )) : (
        <p>Create a blog to view them here.</p>
      )}
    </section>
  );
}