export default function ReviewsPage() {
  return (
    <div className="pt-20 px-6 lg:pt-12">
      <div>
        <h1 className="text-white10 text-h4 font-bold lg:text-h3">
          Reviews
        </h1>
        <p className="text-white25 text-p mt-4">
          View all customer reviews lower than 4 stars for improvements.
        </p>
      </div>

      <div>
        <p>Stars</p>
        <p>Reviewer name</p>
        <p>Review message</p>
      </div>
    </div>
  );
}