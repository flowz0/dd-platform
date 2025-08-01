import CTASection from "@/components/pages/(home)/CTA";
import FAQSection from "@/components/pages/(home)/faqs/FAQs";
import ReviewsSection from "@/components/pages/(home)/reviews/Reviews";
import ServiceAreaSection from "@/components/pages/(home)/service-area/ServiceArea";
import WhyUsSection from "@/components/pages/(home)/why/WhyUs";
import ServiceAboutSection from "@/components/pages/services/ServiceAbout";
import ServiceHeroSection from "@/components/pages/services/ServiceHero";
import ServiceAboutImg from "@/public/service/air-duct-cleaning.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Dryer Vent Cleaning in Kansas City, Missouri",
  description: "Protect your home from fire hazards with expert dryer vent cleaning in Kansas City, MO. Duct Daddy provides thorough vent cleaning to improve dryer efficiency and safety for residential and commercial properties.",
};

export default function DryerVentCleaningPage() {
  return (
    <div>
      <ServiceHeroSection
        service="Professional Dryer Vent Cleaning in Kansas City"
        desc="Breathe cleaner, healthier air with Kansas City's trusted family-owned duct cleaning company. Since 2023, Duct Daddy has helped homeowners and businesses improve indoor air quality, boost HVAC efficiency, and create safer, more comfortable spaces."
        cta="Book Dryer Vent Cleaning Today"
      />
      <ServiceAboutSection
        img={ServiceAboutImg}
        service="Dryer Vent Cleaning"
        desc="Our dryer vent cleaning service clears out lint and buildup to prevent fires, improve drying performance, and keep your Kansas City home safe and efficient."
        cta="Book Dryer Vent Cleaning Today"
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