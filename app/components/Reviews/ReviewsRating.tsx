import ShowcaseRating from "../Reviews/ShowcaseRating";

interface Props {
  reviewCount: number;
  rating: number;
}
const ReviewsRating = ({ reviewCount, rating }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <ShowcaseRating rating={rating} />
      <span className="text-xs">{reviewCount} Reviews</span>
    </div>
  );
};

export default ReviewsRating;
