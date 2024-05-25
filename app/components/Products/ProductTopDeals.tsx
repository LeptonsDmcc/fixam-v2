import ProductCard from "./ProductCard";
import ProductShowcase from "./ProductShowCase";
import ProductTitleBar from "./ProductTitleBar";

interface Props {
  title: string;
}

const ProductTopDeals = ({ title }: Props) => {
  return (
    <section>
      <ProductTitleBar title={title} />

      <article
        className="flex gap-6 
            has-scrollbar overflow-x-auto scroll-x-behavior scroll-snap-align-start"
      >
        {[1, 2, 3].map((product) => (
          <ProductCard key={product} />
        ))}
      </article>
    </section>
  );
};

export default ProductTopDeals;
