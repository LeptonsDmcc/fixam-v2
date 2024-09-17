import ProgressBar from "@/app/components/ProgressIndicators/ProgressBar";
import ShowcaseRating from "@/app/components/Reviews/ShowcaseRating";
import Space from "@/app/components/Spacing/Space";
import { fixamBaseUrlClient } from "@/app/lib/contants";
import { useEffect, useState } from "react";
import ReviewsByCustomers, { ReviewType } from "./ReviewsByCustomers";

interface Props {
  productId?: string;
}
const ReviewRatingSummary = ({ productId }: Readonly<Props>) => {
  const [reviews, setReviews] = useState<{ results: ReviewType[] }>();

  useEffect(() => {
    const initRevies = async () => {
      const reviewsRes = await fetch(
        `${fixamBaseUrlClient}/products/reviews/?product_id=${productId}`
      );
      const reviewsData = await reviewsRes.json();

      console.log("reviews", reviewsData);
      setReviews(reviewsData);
    };

    initRevies();
  }, []);

  if (reviews && reviews.results) {
    const calculateAverageReviews = reviews.results.reduce((acc, cur) => {
      return acc + cur.rating / reviews.results.length;
    }, 0);

    let fiveStarCount = 0;
    let fourStarCount = 0;
    let threeStarCount = 0;
    let twoStarCount = 0;
    let oneStarCount = 0;

    reviews.results.forEach((review) => {
      fiveStarCount = review.rating === 5 ? fiveStarCount + 1 : fiveStarCount;
      fourStarCount = review.rating === 4 ? fourStarCount + 1 : fourStarCount;
      threeStarCount =
        review.rating === 3 ? threeStarCount + 1 : threeStarCount;
      twoStarCount = review.rating === 2 ? twoStarCount + 1 : twoStarCount;
      oneStarCount = review.rating === 1 ? oneStarCount + 1 : oneStarCount;
    });

    return (
      <>
        <section className="flex ">
          <div className="min-w-[40%] md:min-w-[50%] min-h-[170px] md:min-h-max">
            <header className="flex items-center gap-4">
              <p className="text-[2.2rem] md:text-[5.6rem]">
                {calculateAverageReviews}
              </p>
              <p>out of 5</p>
            </header>
            <div>
              <ShowcaseRating rating={0} />
              <Space spacing="my-4" />
              <p>{reviews.results.length} reviews</p>
            </div>
          </div>
          <div className="min-w-[60%] md:min-w-[50%]">
            <div className=" flex flex-col justify-between h-full">
              {[1, 2, 3, 4, 5].reverse().map((v, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className=" w-12 text-center text-xs">{v} star</div>
                  <div className=" flex-grow">
                    <ProgressBar />
                  </div>
                  <div className=" w-12 text-center text-xs">
                    {v === 5
                      ? fiveStarCount
                      : v === 4
                      ? fourStarCount
                      : v === 3
                      ? threeStarCount
                      : v === 2
                      ? twoStarCount
                      : oneStarCount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Space spacing="my-6" />
        <ReviewsByCustomers reviews={reviews.results || []} />
      </>
    );
  }
};

export default ReviewRatingSummary;
