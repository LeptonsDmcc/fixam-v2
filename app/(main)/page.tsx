import { ROUTES } from "../lib/contants";
import getAuthUser from "../lib/data/getAuthUser";
import { ProductType } from "../lib/types";
import HomeBanners from "./components/Banners/HomeBanners";
import BrowseCategories from "./components/Categories/BrowseCategories";
import ShowcaseSubCategories from "./components/Categories/ShowcaseSubCategories";
import FixAdPremium from "./components/FixAds.tsx/FixAdPremium";
import Grid from "./components/Grid";
import Services from "./components/OurServices/Services";
import BestSellingProducts from "./components/Products/BestSellingProducts";
import DealOfTheDay from "./components/Products/DealOfTheDay";
import ProductCarousel from "./components/Products/ProductCarousel";
import RecommendedProducts from "./components/Products/RecommendedProducts";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import Space from "./components/Spacing/Space";
import Wrapper from "./components/Wrapper";
import MessagePrompt from "./MessagePrompt";

interface Props {
  searchParams: { message: string };
}

export default async function Home({ searchParams: { message } }: Props) {
  const latestProdsRes = await fetch(`${process.env.FIXAM_BASE_URL}/products/`);
  const latestProdsJsonRes = await latestProdsRes.json();
  const latestProducts: ProductType[] = latestProdsJsonRes.results;

  const user = getAuthUser();

  return (
    <>
      <MessagePrompt message={message} />
      <HomeBanners />
      <SectionSpacing />
      <Wrapper>
        <ShowcaseSubCategories slug="home" />
        <SectionSpacing />
        <div className="hidden md:block">
          <Grid cols={2}>
            <section>
              <BrowseCategories />
            </section>
            <BestSellingProducts />
          </Grid>
        </div>
        <SectionSpacing />
        <RecommendedProducts />
        <SectionSpacing />
        <Services />
        <SectionSpacing />
        <DealOfTheDay href={`${ROUTES.product}/deals`} />
        <SectionSpacing />
        <FixAdPremium />
        <SectionSpacing />
        <ProductCarousel
          title="Latest Products"
          products={latestProducts}
          href={`${ROUTES.specials}/latest-product`}
        />
      </Wrapper>
      <Space spacing="my-20" />
    </>
  );
}
