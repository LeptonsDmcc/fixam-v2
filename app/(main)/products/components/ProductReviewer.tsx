import ShowcaseRating from "@/app/components/Reviews/ShowcaseRating";
import Space from "@/app/components/Spacing/Space";
import { ReviewType } from "./ReviewsByCustomers";
import { useEffect, useState } from "react";
import { fixamBaseUrlClient } from "@/app/lib/contants";
import { UserType } from "@/app/lib/types";

interface Props {
  review: ReviewType;
}

const ProductReviewer = ({ review }: Readonly<Props>) => {
  const [reviewer, setReviewer] = useState<UserType>();

  useEffect(() => {
    const initRevies = async () => {
      const reviewerRes = await fetch(
        `${fixamBaseUrlClient}/users/${review.user}/`
      );
      const reviewerData = await reviewerRes.json();

      console.log("reviewer", reviewerData);
      setReviewer(reviewerData);
    };

    initRevies();
  }, []);

  if (reviewer)
    return (
      <li
        className="flex items-center my-6 gap-1
                  md:gap-6"
      >
        <div
          className=" min-h-10 min-w-10 h-10 w-10 rounded-full bg-orange-400 
                    text-white font-semibold flex items-center justify-center"
        >
          {reviewer.first_name[0]}
        </div>

        <div className="min-w-[calc(50%-2.5rem)] text-xs">
          <p>{reviewer.first_name + " " + reviewer.last_name}</p>
          <Space spacing=" my-2" />
          <p className="text-gray-400">October, 1 2024</p>
        </div>

        <div
          className="min-w-[calc(50%-2.5rem)] max-w-[calc(50%-2.5rem)] 
                  w-[calc(50%-2.5rem)] text-xs"
        >
          <ShowcaseRating rating={0} />
          <Space spacing=" my-2" />
          <p className="overflow-hidden line-clamp-2">{review.review_text}</p>
        </div>
      </li>
    );
};

export default ProductReviewer;
