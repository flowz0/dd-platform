import CTASection from "@/components/home/CTA";
import ReviewsSection from "@/components/home/reviews/Reviews";
import ServiceAreaSection from "@/components/home/service-area/ServiceArea";
import WhyUsSection from "@/components/home/why/WhyUs";
import AboutHeroSection from "@/components/pages/about/AboutHero";
import AboutStorySection from "@/components/pages/about/AboutStory";
import MissionSection from "@/components/pages/about/Mission";


export default function AboutPage() {
  return (
    <div>
      <AboutHeroSection />
      <AboutStorySection />
      <MissionSection />
      <WhyUsSection />
      <ServiceAreaSection />
      <div className="pt-48 sm:pt-64">
        <ReviewsSection />
      </div>
      <CTASection />
    </div>
  );
}