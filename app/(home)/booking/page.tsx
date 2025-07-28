import FAQSection from "@/components/home/faqs/FAQs";
import ReviewsSection from "@/components/home/reviews/Reviews";
import ServiceAreaSection from "@/components/home/service-area/ServiceArea";
import ServicesSection from "@/components/home/services/Services";
import WhyUsSection from "@/components/home/why/WhyUs";
import BookingHeroSection from "@/components/pages/booking/BookingHero";

export default function BookingPage() {
  return (
    <div>
      <BookingHeroSection />
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