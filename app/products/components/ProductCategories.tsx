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
import SortBy from "./SortBy";
import ProductCarousel from "@/app/components/Products/ProductCarousel";
import { Filter } from "iconsax-react";
import FilterMenuTrigger from "./FilterMenuTrigger";

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
        <FilterMenuTrigger />
        <header
          className="hidden justify-end items-center text-xs gap-2
         lg:flex"
        >
          <span className="mr-2">Sort By:</span>
          <Link
            href=""
            className="border border-orange-400 text-orange-400 p-2 rounded-md"
          >
            Relevance
          </Link>
          <Link
            href=""
            className=" border border-gray-500 text-gray-500 p-2 rounded-md 
          hover:border-orange-400 hover:text-orange-400"
          >
            Price: High to Low
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
        {/* <Products /> */}
        <SectionSpacing />
        <ProductCarousel title={`Top Deals on ${capitalize(dealFor)}`} />
        {/* <ProductTopDeals title={`Top Deals on ${capitalize(dealFor)}`} /> */}
        <SectionSpacing />
        <Products title={`Latest ${capitalize(dealFor)}`} />
        <SectionSpacing />
        <Pagination />
        <SectionSpacing />
      </section>
    </Grid>
  );
};

export default ProductCategories;
