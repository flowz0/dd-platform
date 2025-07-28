import CTASection from "@/components/home/CTA";
import FAQSection from "@/components/home/faqs/FAQs";
import ReviewsSection from "@/components/home/reviews/Reviews";
import ServiceAreaSection from "@/components/home/service-area/ServiceArea";
import ServicesSection from "@/components/home/services/Services";
import WhyUsSection from "@/components/home/why/WhyUs";
import ServiceHeroSection from "@/components/pages/services/ServiceHero";

export default function OdessaPage() {
  return (
    <div>
      <ServiceHeroSection
        service="Odessa's Trusted Air Duct & Dryer Vent Cleaning Experts"
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