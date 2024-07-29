import React from "react";
import ProductCard from "./ProductCard";
import Grid from "../Grid";
import ProductTitleBar from "./ProductTitleBar";
import { ProductType } from "@/app/lib/types";
import DealOfTheDayProduct from "./DealOfTheDayProduct";

interface Props {
  title?: string;
  products: ProductType[];
  isDealOfTheDay?: boolean;
}

const Products = ({ title, products, isDealOfTheDay }: Props) => {
  return (
    <section>
      <ProductTitleBar title={title || ""} noSeeAll href="cls" />
      <Grid cols={3}>
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            inDealOfTheDay={isDealOfTheDay}
          />
        ))}
      </Grid>
    </section>
  );
};

export default Products;
