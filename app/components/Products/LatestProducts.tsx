import Grid from "../Grid";
import Space from "../Spacing/Space";
import ProductCard from "./ProductCard";
import ProductTitleBar from "./ProductTitleBar";

interface Props {
  size?: number;
}
const LatestProducts = ({ size = 8 }: Props) => {
  return (
    <section>
      <ProductTitleBar title="Latest Products" />
      <Space spacing="my-4" />
      <Grid cols={4}>
        {Array.from({ length: size }).map((product, i) => (
          <ProductCard key={i} />
        ))}
      </Grid>
    </section>
  );
};

export default LatestProducts;
