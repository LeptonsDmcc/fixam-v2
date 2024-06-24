import HomeBanners from "./components/Banners/HomeBanners";
import BrowseCategories from "./components/Categories/BrowseCategories";
import SubCategories from "./components/Categories/SubCategories";
import FixAdPremium from "./components/FixAds.tsx/FixAdPremium";
import Grid from "./components/Grid";
import Services from "./components/OurServices/Services";
import DealOfTheDay from "./components/Products/DealOfTheDay";
import ProductCarousel from "./components/Products/ProductCarousel";
import ProductsShowcase from "./components/Products/ProductsShowcase";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import Space from "./components/Spacing/Space";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <>
      <HomeBanners />
      <Space spacing="md:my-20" />
      <Wrapper>
        <SubCategories />
        <SectionSpacing />
        <div className="hidden md:block">
          <Grid cols={2}>
            <section>
              <BrowseCategories />
            </section>
            <section className="my-12">
              <ProductsShowcase title="Best Sellers" withShortDescription />
            </section>
          </Grid>
        </div>
        <SectionSpacing />

        <div className="hidden md:block">
          <ProductsShowcase title="Recommended for you" withShortDescription />
        </div>

        <div className="block md:hidden">
          <ProductCarousel title="Recommended for you" />
        </div>
        <SectionSpacing />
        <Services />
        <SectionSpacing />
        <DealOfTheDay />
        <SectionSpacing />
        <FixAdPremium />
        <SectionSpacing />
        <ProductCarousel title="Latest Products" />
      </Wrapper>
      <Space spacing={"my-20"} />
      {/* <Category />
      <ProductContainer />
      <TestimonialBox /> */}
    </>
  );
}
