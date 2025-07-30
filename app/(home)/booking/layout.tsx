import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Air Duct Cleaning Services in Kansas City",
  description: "Schedule air duct, dryer vent, or HVAC cleaning with Duct Daddy in Kansas City and surrounding areas. Book your appointment online today for cleaner air and a safer home.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}