"use client";

import DashboardNavbar from "@/components/navigation/DashboardNavbar";
import Sidebar from "@/components/navigation/Sidebar";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import useAuthUser from "@/hooks/useAuthUser";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthUser();

  useEffect(() => {
    if (!user) return;

    if (pathname === "/dashboard") {
      router.push("/manage-blog");
    }
  }, [user, pathname, router]);

  if (user === null) return <LoadingSpinner />;

  return (
    <div className="flex h-screen bg-white95">
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white90 border-r border-white90">
        <Sidebar />
      </aside>

      <div className="flex flex-1 flex-col lg:ml-64">
        <div className="lg:hidden">
          <DashboardNavbar />
        </div>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
