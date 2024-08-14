import Filters from "@/app/components/Filters/Filters";
import Grid from "@/app/components/Grid";
import Pagination from "@/app/components/Pagination";
import ProductCarousel from "@/app/components/Products/ProductCarousel";
import Products from "@/app/components/Products/Products";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import capitalize from "@/app/lib/capitalize";
import { CategoryType, ProductType } from "@/app/lib/types";
import { Suspense } from "react";
import FilterMenuTrigger from "./FilterMenuTrigger";
import SortBy from "./SortBy";

interface Props {
  category: string;
  products: ProductType[];
  found: number;
}

const ProductCategories = async ({ products, category, found }: Props) => {
  let topDealProds: ProductType[] = [];
  let categoryDoc: CategoryType;

  try {
    const categoryDocRes = await fetch(
      `${process.env.FIXAM_BASE_URL}/products/categories/by_slug/${category}/`,
      {
        next: { revalidate: 10 },
      }
    );

    const categoryDocJsonRes = await categoryDocRes.json();
    categoryDoc = categoryDocJsonRes;

    const topDealsRes = await fetch(
      `${process.env.FIXAM_BASE_URL}/products/?category_id=${categoryDoc?.id}&best_selling=true`,
      {
        next: { revalidate: 10 },
      }
    );

    const topDealProdsJsonRes = await topDealsRes.json();
    topDealProds = topDealProdsJsonRes.results;
  } catch (error) {
    throw error;
  }
  return (
    <Grid cols={2}>
      <Filters />
      <section>
        <FilterMenuTrigger />
        <SortBy />
        {/* <Products /> */}
        <Suspense fallback={<p>Loading...</p>}>
          {!!topDealProds.length && (
            <section>
              <SectionSpacing />
              <ProductCarousel
                products={topDealProds}
                title={`Top Deals ${categoryDoc.name && "on"} ${capitalize(
                  categoryDoc.name
                )}`}
              />
            </section>
          )}
          {/* <ProductTopDeals title={`Top Deals on ${capitalize(dealFor)}`} /> */}
          <SectionSpacing />
          <Products
            products={products}
            title={`Latest ${capitalize(categoryDoc.name || "Products")}`}
          />
        </Suspense>
        <SectionSpacing />
        {!!found && <Pagination found={found} />}
        <SectionSpacing />
      </section>
    </Grid>
  );
};

export default ProductCategories;
