"use client";

import FAQSection from "@/components/pages/(home)/faqs/FAQs";
import ReviewsSection from "@/components/pages/(home)/reviews/Reviews";
import ServiceAreaSection from "@/components/pages/(home)/service-area/ServiceArea";
import ServicesSection from "@/components/pages/(home)/services/Services";
import WhyUsSection from "@/components/pages/(home)/why/WhyUs";
import BookingHeroSection from "@/components/pages/booking/BookingHero";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    HCPWidget?: {
      openModal: () => void;
    };
  }
}

export default function BookingPage() {
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://online-booking.housecallpro.com/script.js?token=127343b956e24e13a52da46f4500936b&orgName=Duct-Daddy";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (pathname === "/booking" && typeof window.HCPWidget !== "undefined") {
        window.HCPWidget.openModal();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  });

  const handleClick = () => {
    if (typeof window.HCPWidget !== "undefined") {
      window.HCPWidget.openModal();
    }
  };

  return (
    <div>
      <BookingHeroSection handleClick={handleClick} />
      <ServicesSection />
      <WhyUsSection />
      <div className="pt-48 sm:pt-64">
        <ReviewsSection />
      </div>
      <ServiceAreaSection />
      <FAQSection />
    </div>
  );
}