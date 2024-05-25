import Space from "../Space";
import ProductShowcase from "./ProductShowCase";
import ProductTitleBar from "./ProductTitleBar";

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
}

const ProductsShowcase = ({ title }: Props) => {
  return (
    <section>
      <ProductTitleBar title={title} />

      <article
        className="flex gap-6 
        has-scrollbar overflow-x-auto scroll-x-behavior scroll-snap-align-start"
      >
        {products.map((product, i) => (
          <ProductShowcase key={i} />
        ))}
      </article>
    </section>
  );
};

export default ProductsShowcase;
