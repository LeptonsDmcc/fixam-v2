import React from "react";
import ProductCard from "./ProductCard";

const DealOfTheDayProductMobile = () => {
  return (
    <section>
      <ProductCard
        inDealOfTheDay
        product={{
          id: undefined,
          description: undefined,
          category: undefined,
          waranty: undefined,
          crumbs: undefined,
          is_dod: undefined,
          categories: undefined,
          is_favorited: undefined,
          brand: undefined,
          store: undefined,
          slug: "",
          images: [],
          name: "",
          selling_price: 0,
          average_rating: 0,
          review_count: 0,
        }}
      />
    </section>
  );
};

export default DealOfTheDayProductMobile;
