import CTASection from "@/components/pages/(home)/CTA";
import FAQSection from "@/components/pages/(home)/faqs/FAQs";
import ReviewsSection from "@/components/pages/(home)/reviews/Reviews";
import ServiceAreaSection from "@/components/pages/(home)/service-area/ServiceArea";
import ServicesSection from "@/components/pages/(home)/services/Services";
import WhyUsSection from "@/components/pages/(home)/why/WhyUs";
import ServiceHeroSection from "@/components/pages/services/ServiceHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Raymore, Missouri",
  description: "Professional HVAC duct cleaning services in Raymore and surrounding areas. Duct Daddy helps improve air quality, safety, and efficiency for homes and businesses. Book your cleaning today!",
};

export default function RaymorePage() {
  return (
    <div>
      <ServiceHeroSection
        service="Raymore's Trusted Air Duct & Dryer Vent Cleaning Experts"
        desc="Family-owned and operated, serving Kansas City and surrounding areas with clean, healthy air since 2023."
        cta="Book Cleaning Online Today"
      />
      <ServicesSection />
      <WhyUsSection />
      <ServiceAreaSection />
      <div className="pt-48 sm:pt-64">
        <ReviewsSection />
      </div>
      <FAQSection />
      <CTASection />
    </div>
  );
}