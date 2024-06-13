import BrowseCategories from "@/app/components/Categories/BrowseCategories";
import Filters from "@/app/components/Filters/Filters";
import Grid from "@/app/components/Grid";
import Pagination from "@/app/components/Pagination";
import ProductTopDeals from "@/app/components/Products/ProductTopDeals";
import Products from "@/app/components/Products/Products";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Space from "@/app/components/Spacing/Space";
import capitalize from "@/app/lib/capitalize";
import Link from "next/link";

interface Props {
  dealFor: string;
}

const ProductCategories = ({ dealFor }: Props) => {
  return (
    <Grid cols={2}>
      <section>
        <BrowseCategories isCollapsible={true} />
        <Space spacing="my-6" />
        <Filters />
      </section>

      <section>
        <header className="flex justify-end items-center text-xs gap-2">
          <span className=" mr-2">Sort By:</span>
          <Link
            href=""
            className=" border border-orange-400 text-orange-400 p-2 rounded-md"
          >
            Relevance
          </Link>
          <Link
            href=""
            className=" border border-gray-500 text-gray-500 p-2 rounded-md
             hover:border-orange-400 hover:text-orange-400"
          >
            Price: HIgh to Low
          </Link>
          <Link
            href=""
            className=" border border-gray-500 text-gray-500 p-2 rounded-md 
            hover:border-orange-400 hover:text-orange-400"
          >
            Price: Low to High
          </Link>
        </header>
        <SectionSpacing />
        <Products />
        <SectionSpacing />
        <ProductTopDeals title={`Top Deals on ${capitalize(dealFor)}`} />
        <SectionSpacing />
        <Pagination />
        <SectionSpacing />
      </section>
    </Grid>
  );
};

export default ProductCategories;
