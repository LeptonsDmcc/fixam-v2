"use client";

import TabButton from "@/app/components/Buttons/TabButton";
import HR from "@/app/components/HR";
import Space from "@/app/components/Spacing/Space";
import { ProductType } from "@/app/lib/types";
import { useEffect, useRef, useState } from "react";
import ProductDescription from "./ProductDescription";
import Warranty from "./Warranty";
import CustomerReviews from "./CustomerReviews";
import SeeAllButton from "@/app/components/Buttons/SeeAllButton";
import ProductTitleBar from "@/app/components/Products/ProductTitleBar";
import ProgressBar from "@/app/components/ProgressIndicators/ProgressBar";
import ShowcaseRating from "@/app/components/Reviews/ShowcaseRating";
import WriteReview from "./WriteReview";
import ReviewRatingSummary from "./ReviewRatingSummary";
import ReviewsByCustomers from "./ReviewsByCustomers";

interface Props {
  product: ProductType;
}

const ProductOverviewPanel = ({ product }: Props) => {
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const customerReviewsRef = useRef<HTMLDivElement | null>(null);
  const warrantyRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveTab(id);
        }
      });
    }, options);

    const descriptionRefCur = descriptionRef.current;
    const customerReviewsRefCur = customerReviewsRef.current;
    const warrantyRefCur = warrantyRef.current;

    if (descriptionRefCur) observer.observe(descriptionRefCur);
    if (customerReviewsRefCur) observer.observe(customerReviewsRefCur);
    if (warrantyRefCur) observer.observe(warrantyRefCur);

    return () => {
      if (descriptionRefCur) observer.unobserve(descriptionRefCur);
      if (customerReviewsRefCur) observer.unobserve(customerReviewsRefCur);
      if (warrantyRefCur) observer.unobserve(warrantyRefCur);
    };
  }, []);

  const handleScrollIntoView = (
    ref: React.RefObject<HTMLDivElement>,
    id: string
  ) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setActiveTab(id);
  };

  return (
    <section>
      <header className="flex gap-14 sticky top-28 bg-white py-2">
        <TabButton
          isActive={activeTab === "description"}
          onClick={() => handleScrollIntoView(descriptionRef, "description")}
        >
          Description
        </TabButton>
        <TabButton
          isActive={activeTab === "customer-reviews"}
          onClick={() =>
            handleScrollIntoView(customerReviewsRef, "customer-reviews")
          }
        >
          Customer Reviews (2)
        </TabButton>
        <TabButton
          isActive={activeTab === "warranty"}
          onClick={() => handleScrollIntoView(warrantyRef, "warranty")}
        >
          Warranty
        </TabButton>
      </header>
      <Space spacing="my-12" />
      <section ref={descriptionRef} id="description">
        <ProductDescription description={product.description || ""} />
      </section>
      <Space spacing="my-12" />
      <HR />
      <Space spacing="my-12" />
      <section ref={customerReviewsRef} id="customer-reviews">
        <section>
          <ProductTitleBar title="Customer Reviews" noSeeAll />
          <section className="flex flex-col md:flex-row gap-5">
            <section className=" min-w-[50%]">
              <ReviewRatingSummary productId={product.id} />
            </section>

            {/* <section className="min-w-[50%]">
              <WriteReview />
            </section> */}
          </section>
        </section>
      </section>
      <Space spacing="my-12" />
      <HR />
      <Space spacing="my-12" />
      <section ref={warrantyRef} id="warranty">
        <Warranty />
      </section>
    </section>
  );
};

export default ProductOverviewPanel;
