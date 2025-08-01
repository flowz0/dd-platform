import SuggestionCard from "@/components/pages/(dashboard)/reviews/Suggestion";

export default function ReviewsPage() {
  return (
    <div className="py-20 px-6 lg:py-12">
      <div>
        <h1 className="text-white10 text-h4 font-bold lg:text-h3">
          Reviews
        </h1>
        <p className="text-white25 text-p mt-4">
          View all customer reviews lower than 4 stars for improvements.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-4 mt-16 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-4">
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </div>
    </div>
  );
}