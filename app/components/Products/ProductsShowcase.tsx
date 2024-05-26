import Space from "../Space";
import ProductShowcase from "./ProductShowCase";
import ProductTitleBar from "./ProductTitleBar";
import ProductCard from "./ProductCard";

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
  withShortDescription?: boolean;
  noSeeAll?: boolean;
}

const ProductsShowcase = ({
  title,
  noSeeAll,
  withShortDescription = true,
}: Props) => {
  if (withShortDescription)
    return (
      <section>
        <ProductTitleBar title={title} noSeeAll={noSeeAll} />

        <article
          className="flex gap-6 overflow-x-auto has-scrollbar 
        scroll-snap-type-inline-mandatory
        overscroll-behavior-inline-contain 
        "
        >
          {products.map((product, i) => (
            <div className="scroll-snap-align-start">
              <ProductShowcase key={i} />
            </div>
          ))}
        </article>
      </section>
    );

  return (
    <section>
      <ProductTitleBar title={title} noSeeAll={noSeeAll} />
      <Space spacing="my-4" />
      <section
        className="flex gap-6 overflow-x-auto has-scrollbar 
      scroll-snap-type-inline-mandatory
      overscroll-behavior-inline-contain "
      >
        {Array.from({ length: 8 }).map((product, i) => (
          <div key={i} className="scroll-snap-align-start min-w-[25%] pb-4">
            <ProductCard key={i} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProductsShowcase;
