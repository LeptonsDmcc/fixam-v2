"use client";

import ProductDescription from "./ProductDescription";
import Space from "@/app/components/Spacing/Space";
import Warranty from "./Warranty";
import HR from "@/app/components/HR";
import CustomerReviews from "./CustomerReviews";
import TabButton from "@/app/components/Buttons/TabButton";
import { useEffect, useRef, useState } from "react";

const ProductOverviewPanel = () => {
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
        <ProductDescription />
      </section>
      <Space spacing="my-12" />
      <HR />
      <Space spacing="my-12" />
      <section ref={customerReviewsRef} id="customer-reviews">
        <CustomerReviews />
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
