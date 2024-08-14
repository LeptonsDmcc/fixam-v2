import { ProductType } from "@/app/lib/types";
import ProductsShowcase from "./ProductsShowcase";
import { ROUTES } from "@/app/lib/contants";
import { getRandomUniqueElements } from "@/app/lib/randomValues";

const BestSellingProducts = async () => {
  const bestSellingProdsRes = await fetch(
    `${process.env.FIXAM_BASE_URL}/products/best_selling/`,
    {
      next: {
        revalidate: 1000,
      },
    }
  );
  const bestSellingProdsJsonRes = await bestSellingProdsRes.json();
  const bestSellingProducts: ProductType[] = bestSellingProdsJsonRes.results;
  return (
    <section className="my-12">
      <ProductsShowcase
        products={getRandomUniqueElements(bestSellingProducts, 10)}
        title="Best Sellers"
        withShortDescription
        href={`${ROUTES.specials}/best-sellers`}
      />
    </section>
  );
};

export default BestSellingProducts;
