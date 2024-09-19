import BrowseCategories from "@/app/components/Categories/BrowseCategories";
import Filters from "@/app/components/Filters/Filters";
import Grid from "@/app/components/Grid";
import Pagination from "@/app/components/Pagination";
import Products from "@/app/components/Products/Products";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Space from "@/app/components/Spacing/Space";
import Wrapper from "@/app/components/Wrapper";
import { ProductType } from "@/app/lib/types";
import { ArrowDown2 } from "iconsax-react";
import Link from "next/link";
import FilterMenuTrigger from "../components/FilterMenuTrigger";

const page = async () => {
  const latestProdsRes = await fetch(`${process.env.FIXAM_BASE_URL}/products/`);
  // `${process.env.FIXAM_BASE_URL}/products/deal_of_the_day/
  const latestProdsJsonRes = await latestProdsRes.json();
  const productsDayDeal: ProductType[] = latestProdsJsonRes.results;

  return (
    <Wrapper>
      <SectionSpacing />
      <Grid cols={2}>
        <section>
          <BrowseCategories isCollapsible={true} />
          <Space spacing="my-6" />
          <Filters />
        </section>

        <section>
          <FilterMenuTrigger />
          <header
            className="hidden justify-between items-center gap-2
            bg-orange-600 h-[73px] rounded-lg pl-[21px] pr-[47px]
            lg:flex"
          >
            <h3 className=" text-2xl text-white">Deal of the day</h3>
            <div className="flex items-center gap-4">
              <span className=" text-white">Sort By:</span>
              <Link
                href={""}
                className="flex items-center justify-center gap-2 border border-white rounded-lg
                 text-white h-[48px] w-[141px]"
              >
                <span>Relevance</span>
                <ArrowDown2 size={24} />
              </Link>
            </div>
            {/* <span className="mr-2">Sort By:</span>
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
            </Link> */}
          </header>
          <BaseSpacing />
          <div className="flex items-center justify-between">
            <p>
              <span>Time Left: </span> <span>22h : 05m : 40s</span>
            </p>
            <p>25 MAY, 10:00AM</p>
            <p>25 MAY, 10:00AM</p>
          </div>
          <BaseSpacing />
          <Products products={productsDayDeal} isDealOfTheDay />
          <SectionSpacing />
          <Pagination found={0} />
          <SectionSpacing />
        </section>
      </Grid>
    </Wrapper>
  );
};

export default page;
