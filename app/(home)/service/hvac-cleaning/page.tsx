import CTASection from "@/components/(home)/CTA";
import FAQSection from "@/components/(home)/faqs/FAQs";
import ReviewsSection from "@/components/(home)/reviews/Reviews";
import ServiceAreaSection from "@/components/(home)/service-area/ServiceArea";
import WhyUsSection from "@/components/(home)/why/WhyUs";
import ServiceAboutSection from "@/components/pages/services/ServiceAbout";
import ServiceHeroSection from "@/components/pages/services/ServiceHero";
import ServiceAboutImg from "@/public/about/aboutstory.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional HVAC Cleaning in Kansas City, Missouri",
  description: "Extend the life of your HVAC system with Duct Daddy's professional HVAC cleaning services in Kansas City and nearby areas. We clean coils, vents, and systems to boost efficiency and indoor air quality.",
};

export default function HVACCleaningPage() {
  return (
    <div>
      <ServiceHeroSection
        service="Professional HVAC Cleaning in Kansas City"
        desc="Breathe cleaner, healthier air with Kansas City's trusted family-owned duct cleaning company. Since 2023, Duct Daddy has helped homeowners and businesses improve indoor air quality, boost HVAC efficiency, and create safer, more comfortable spaces."
        cta="Book HVAC Cleaning Today"
      />
      <ServiceAboutSection
        img={ServiceAboutImg}
        service="HVAC Cleaning"
        desc="We provide deep HVAC cleaning and optional sanitizing treatments that reduce odors, bacteria, and allergens for cleaner air and a healthier indoor environment."
        cta="Book HVAC Cleaning & Sanitizing Today"
      />
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