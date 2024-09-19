import fetchProducts from "@/app/(main)/services/products/fetchProducts";
import ProductCard from "./ProductCard";
import ProductTitleBar from "./ProductTitleBar";

interface Props {
  title: string;
}

const ProductTopDeals = async ({ title }: Props) => {
  const products = await fetchProducts();
  return (
    <section>
      <ProductTitleBar title={title} />

      <article
        className="flex gap-6 
            has-scrollbar overflow-x-auto scroll-x-behavior scroll-snap-align-start"
      >
        {products.results.slice(1, 5).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </article>
    </section>
  );
};

export default ProductTopDeals;
