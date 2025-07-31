import BeforeAfterSection from "@/components/(home)/before-after/BeforeAfter";
import CTASection from "@/components/(home)/CTA";
import FAQSection from "@/components/(home)/faqs/FAQs";
import Footer from "@/components/navigation/Footer";
import Hero from "@/components/(home)/Hero";
import Navbar from "@/components/navigation/Navbar";
import ReviewsSection from "@/components/(home)/reviews/Reviews";
import ServiceAreaSection from "@/components/(home)/service-area/ServiceArea";
import ServicesSection from "@/components/(home)/services/Services";
import WhyUsSection from "@/components/(home)/why/WhyUs";
import WaveDividerIn from "@/components/ui/WaveDividerIn";
import WaveDividerOut from "@/components/ui/WaveDividerOut";
import MobileCallBtn from "@/components/navigation/MobileCallBtn";

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