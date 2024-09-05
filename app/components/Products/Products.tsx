import { ProductType } from "@/app/lib/types";
import Grid from "../Grid";
import ProductCard from "./ProductCard";
import ProductTitleBar from "./ProductTitleBar";

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
