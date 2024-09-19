import SeeAllButton from "@/app/components/Buttons/SeeAllButton";
import ProductReviewer from "./ProductReviewer";

export type ReviewType = {
  id: String;
  rating: number;
  review_text: String;
  is_deleted: boolean;
  user: String;
  product: String;
};

interface Props {
  reviews: ReviewType[];
}
const ReviewsByCustomers = ({ reviews }: Readonly<Props>) => {
  if (reviews && reviews.length)
    return (
      <section>
        <ul className="shadow-10-01 rounded-md py-4 px-[14px]">
          <header className="flex justify-end">
            <SeeAllButton noArrow href="" />
          </header>
          {reviews.map((review, i) => (
            <ProductReviewer key={i} review={review} />
          ))}
        </ul>
      </section>
    );
};

export default ReviewsByCustomers;
