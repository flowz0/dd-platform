import CTASection from "@/components/home/CTA";
import FAQSection from "@/components/home/faqs/FAQs";
import ReviewsSection from "@/components/home/reviews/Reviews";
import ServiceAreaSection from "@/components/home/service-area/ServiceArea";
import WhyUsSection from "@/components/home/why/WhyUs";
import ServiceAboutSection from "@/components/pages/services/ServiceAbout";
import ServiceHeroSection from "@/components/pages/services/ServiceHero";
import ServiceAboutImg from "@/public/service/air-duct-cleaning.webp";

export default function AirDuctCleaningPage() {
  return (
    <div>
      <ServiceHeroSection
        service="Professional Air Duct Cleaning in Kansas City"
        desc="Breathe cleaner, healthier air with Kansas City's trusted family-owned duct cleaning company. Since 2023, Duct Daddy has helped homeowners and businesses improve indoor air quality, boost HVAC efficiency, and create safer, more comfortable spaces."
        cta="Book Air Duct Cleaning Today"
      />
      <ServiceAboutSection
        img={ServiceAboutImg}
        service="Air Duct Cleaning"
        desc="Our air duct cleaning service removes dust, allergens, and debris from your HVAC system to improve air quality, reduce energy costs, and keep your Kansas City home healthier and safer."
        cta="Book Air Duct Cleaning Today"
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