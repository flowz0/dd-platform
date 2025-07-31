import CTASection from "@/components/(home)/CTA";
import FAQSection from "@/components/(home)/faqs/FAQs";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";

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