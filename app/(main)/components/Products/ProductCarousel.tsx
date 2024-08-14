import React from "react";
import ProductTitleBar from "./ProductTitleBar";
import ProductCard from "./ProductCard";
import { ProductType } from "@/app/lib/types";

interface Props {
  title?: string;
  withShortDescription?: boolean;
  noSeeAll?: boolean;
  inDealOfTheDay?: boolean;
  href?: string;
  products: ProductType[];
}

const ProductCarousel = ({
  title,
  noSeeAll,
  href,
  products,
  inDealOfTheDay,
}: Props) => {
  return (
    <div>
      <ProductTitleBar
        title={title || ""}
        noSeeAll={noSeeAll}
        href={href || ""}
      />
      <article
        className="flex gap-6 overflow-x-auto has-scrollbar 
        scroll-snap-type-inline-mandatory
        overscroll-behavior-inline-contain"
      >
        {products.map((product) => (
          <div key={product.name} className="scroll-snap-align-start">
            <ProductCard
              key={product.id}
              product={product}
              inDealOfTheDay={inDealOfTheDay}
            />
          </div>
        ))}
      </article>
    </div>
  );
};

export default ProductCarousel;
