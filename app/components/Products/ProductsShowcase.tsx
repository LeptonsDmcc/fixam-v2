import Space from "../Spacing/Space";
import ProductShowcase from "./ProductShowCase";
import ProductTitleBar from "./ProductTitleBar";
import ProductCard from "./ProductCard";
import { ProductType } from "@/app/lib/types";

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
  href: string;
}

const ProductsShowcase = async ({
  title,
  noSeeAll,
  href,
  withShortDescription,
}: Props) => {
  const latestProdsRes = await fetch(`${process.env.FIXAM_BASE_URL}/products/`);
  const latestProdsJsonRes = await latestProdsRes.json();
  const latestProducts: ProductType[] = latestProdsJsonRes.results;

  if (withShortDescription)
    return (
      <section>
        <ProductTitleBar title={title} noSeeAll={noSeeAll} href={href} />

        <article
          className="flex gap-6 overflow-x-auto has-scrollbar 
          scroll-snap-type-inline-mandatory
          overscroll-behavior-inline-contain"
        >
          {products.map((product, i) => (
            <div key={i} className="scroll-snap-align-start">
              <ProductShowcase key={i} />
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
        {latestProducts.map((product) => (
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
