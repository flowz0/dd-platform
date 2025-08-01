import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import WaveDividerIn from "@/components/ui/WaveDividerIn";
import WaveDividerOut from "@/components/ui/WaveDividerOut";
import MobileCallBtn from "@/components/navigation/MobileCallBtn";
import Hero from "@/components/pages/(home)/Hero";
import ServicesSection from "@/components/pages/(home)/services/Services";
import WhyUsSection from "@/components/pages/(home)/why/WhyUs";
import BeforeAfterSection from "@/components/pages/(home)/before-after/BeforeAfter";
import ReviewsSection from "@/components/pages/(home)/reviews/Reviews";
import ServiceAreaSection from "@/components/pages/(home)/service-area/ServiceArea";
import FAQSection from "@/components/pages/(home)/faqs/FAQs";
import CTASection from "@/components/pages/(home)/CTA";

export default function Page() {
  return (
    <div>
      <Navbar />
      <MobileCallBtn />
      <Hero />
      <ServicesSection />
      <WhyUsSection />
      <WaveDividerIn />
      <BeforeAfterSection />
      <WaveDividerOut />
      <ReviewsSection />
      <ServiceAreaSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}