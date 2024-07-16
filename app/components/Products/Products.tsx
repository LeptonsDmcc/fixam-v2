import React from "react";
import ProductCard from "./ProductCard";
import Grid from "../Grid";
import ProductTitleBar from "./ProductTitleBar";

interface Props {
  title?: string;
}

const Products = ({ title }: Props) => {
  return (
    <section>
      <ProductTitleBar title={title || ""} noSeeAll />
      <Grid cols={3}>
        {[1, 2, 3].map((product) => (
          <ProductCard key={product} />
        ))}
      </Grid>
    </section>
  );
};

export default Products;
