import { ROUTES } from "@/app/lib/contants";
import ProductCarousel from "./ProductCarousel";
import ProductsShowcase from "./ProductsShowcase";
import { ProductType } from "@/app/lib/types";
import { getRandomUniqueElements } from "@/app/lib/randomValues";

const RecommendedProducts = async () => {
  const latestProdsRes = await fetch(
    `${process.env.FIXAM_BASE_URL}/products/?limit=300`,
    {
      cache: "no-store",
    }
  );
  const latestProdsJsonRes = await latestProdsRes.json();
  const recommendedProducts: ProductType[] = latestProdsJsonRes.results;

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <ProductsShowcase
          products={getRandomUniqueElements(recommendedProducts, 10)}
          title="Recommended for you"
          href={`${ROUTES.specials}/recommended`}
          withShortDescription
        />
      </div>

      {/* MOBILE */}
      <section className="block lg:hidden">
        <ProductCarousel
          title="Recommended for you"
          products={getRandomUniqueElements(recommendedProducts, 10)}
          href={`${ROUTES.specials}/recommended`}
        />
      </section>
    </>
  );
};

export default RecommendedProducts;
