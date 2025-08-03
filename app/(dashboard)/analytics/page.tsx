"use client";

import AnalyticsCards from "@/components/pages/(dashboard)/analytics/AnalyticsCards";

export default function AnalyticsPage() {
  return (
    <div className="pt-32 pb-16 px-6 lg:pt-16">
      <h1 className="text-white5 text-h3 font-bold md:text-h1">
        Page Views
      </h1>
      <AnalyticsCards />
    </div>
  );
}