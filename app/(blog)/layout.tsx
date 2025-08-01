import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import CTASection from "@/components/pages/(home)/CTA";
import FAQSection from "@/components/pages/(home)/faqs/FAQs";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}