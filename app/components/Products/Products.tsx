import React from "react";
import ProductCard from "./ProductCard";
import Grid from "../Grid";

const Products = () => {
  return (
    <Grid cols={3}>
      {[1, 2, 3].map((product) => (
        <ProductCard key={product} />
      ))}
    </Grid>
  );
};

export default Products;
