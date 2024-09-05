import Space from "../Spacing/Space";
import ProductShowcase from "./ProductShowCase";
import ProductTitleBar from "./ProductTitleBar";
import ProductCard from "./ProductCard";
import { ProductType } from "@/app/lib/types";

interface Props {
  title: string;
  withShortDescription?: boolean;
  noSeeAll?: boolean;
  href: string;
  products: ProductType[];
}

const ProductsShowcase = async ({
  title,
  noSeeAll,
  href,
  products,
  withShortDescription,
}: Props) => {
  if (withShortDescription)
    return (
      <section>
        <ProductTitleBar title={title} noSeeAll={noSeeAll} href={href} />

        <article
          className="flex gap-6 overflow-x-auto has-scrollbar 
          scroll-snap-type-inline-mandatory
          overscroll-behavior-inline-contain"
        >
          {products.map((product) => (
            <div key={product.name} className="scroll-snap-align-start">
              <ProductShowcase product={product} key={product.name} />
            </div>
          ))}
        </article>
      </section>
    );

  return (
    <section>
      <ProductTitleBar title={title} noSeeAll={noSeeAll} href={href} />
      <Space spacing="my-4" />
      <section
        className="flex gap-6 overflow-x-auto has-scrollbar 
      scroll-snap-type-inline-mandatory
      overscroll-behavior-inline-contain "
      >
        {products.map((product) => (
          <div
            key={product.name}
            className="scroll-snap-align-start min-w-[25%] pb-4"
          >
            <ProductCard product={product} key={product.name} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProductsShowcase;
