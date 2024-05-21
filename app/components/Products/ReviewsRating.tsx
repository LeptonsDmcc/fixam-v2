import ShowcaseRating from "../Reviews/ShowcaseRating";

const ReviewsRating = () => {
  return (
    <div className="flex items-center gap-2">
      <ShowcaseRating />
      <span className="text-xs">10 Reviews</span>
    </div>
  );
};

export default ReviewsRating;
