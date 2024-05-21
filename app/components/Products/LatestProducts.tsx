import Grid from "../Grid";
import Space from "../Space";
import ProductCard from "./ProductCard";
import ProductTitleBar from "./ProductTitleBar";

const LatestProducts = () => {
  return (
    <section>
      <ProductTitleBar title="Latest Products" />
      <Space spacing="my-4" />
      <Grid cols={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
          <ProductCard />
        ))}
      </Grid>
    </section>
  );
};

export default LatestProducts;
