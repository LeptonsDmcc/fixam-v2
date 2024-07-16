import React from "react";
import ProductTitleBar from "./ProductTitleBar";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "",
    rating: "",
  },
  {
    name: "",
    rating: "",
  },
  {
    name: "",
    rating: "",
  },
];

interface Props {
  title: string;
  withShortDescription?: boolean;
  noSeeAll?: boolean;
  inDealOfTheDay?: boolean;
}

const ProductCarousel = ({ title, noSeeAll, inDealOfTheDay }: Props) => {
  return (
    <div>
      <ProductTitleBar title={title} noSeeAll={noSeeAll} />
      <article
        className="flex gap-6 overflow-x-auto has-scrollbar 
        scroll-snap-type-inline-mandatory
        overscroll-behavior-inline-contain 
        "
      >
        {products.map((product, i) => (
          <div key={i} className="scroll-snap-align-start">
            <ProductCard key={i} inDealOfTheDay={inDealOfTheDay} />
          </div>
        ))}
      </article>
    </div>
  );
};

export default ProductCarousel;
