import HomeBanners from "./components/Banners/HomeBanners";
import BrowseCategories from "./components/Categories/BrowseCategories";
import SubCategories from "./components/Categories/SubCategories";
import FixAdPremium from "./components/FixAds.tsx/FixAdPremium";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid";
import RadioInput from "./components/Inputs/RadioInput";
import Services from "./components/OurServices/Services";
import DealOfTheDay from "./components/Products/DealOfTheDay";
import LatestProducts from "./components/Products/LatestProducts";
import ProductsShowcase from "./components/Products/ProductsShowcase";
import Space from "./components/Spacing/Space";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <>
      <HomeBanners />
      <Space spacing="my-20" />
      <Wrapper>
        <SubCategories />
        <Space spacing="my-12" />
        <Grid cols={2}>
          <section>
            <BrowseCategories />
          </section>
          <section className="my-12">
            <ProductsShowcase title="Best Sellers" withShortDescription />
          </section>
        </Grid>
        <Space spacing="my-12" />
        <ProductsShowcase title="Recommended for you" withShortDescription />
        <Space spacing="my-12" />
        <Services />
        <Space spacing="my-12" />
        <DealOfTheDay />
        <Space spacing="my-12" />
        <FixAdPremium />
        <Space spacing="my-12" />
        <LatestProducts />
      </Wrapper>
      <Space spacing={"my-20"} />
      {/* <Category />
      <ProductContainer />
      <TestimonialBox /> */}
    </>
  );
}
