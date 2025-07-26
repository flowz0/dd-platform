import faqData from "@/data/faq";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 === 1);
  
  return (
    <div className="pt-48 max-w-7xl mx-auto px-6 sm:pt-64">
      <div className="flex flex-col items-center">
        <h2 className="text-white10 text-h4 font-bold text-center sm:text-h2">
          Everything You Need To Know
        </h2>
        <p className="text-white25 text-p text-center mt-8 max-w-xl">
          Got questions? We&apos;ve answered the most common ones to help you feel confident before booking with Duct Daddy.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:mt-12 lg:flex-row">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {leftColumn.map(({ question, answer }, index) => (
            <FAQItem key={index} question={question} answer={answer} />
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {rightColumn.map(({ question, answer }, index) => (
            <FAQItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}