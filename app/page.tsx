import HomeBanners from "./components/Banners/HomeBanners";
import SubCategories from "./components/Categories/SubCategories";
import Footer from "./components/Footer/Footer";
import Services from "./components/OurServices/Services";
import DealOfTheDay from "./components/Products/DealOfTheDay";
import LatestProducts from "./components/Products/LatestProducts";
import ProductListing from "./components/Products/ProductTitleBar";
import ProductsShowcase from "./components/Products/ProductsShowcase";
import Space from "./components/Space";
import Wrapper from "./components/Wrapper";
import Grid from "./components/Grid";
import BrowseCategories from "./components/Categories/BrowseCategories";

export default function Home() {
  return (
    <>
      <HomeBanners />
      <Space spacing={"my-20"} />
      <Wrapper>
        <SubCategories />
        <Space spacing={"my-12"} />
        <Grid cols={2}>
          <section>
            <BrowseCategories />
          </section>
          <section className="my-12">
            <ProductsShowcase title="Best Sellers" />
          </section>
        </Grid>
        <Space spacing={"my-12"} />
        <ProductsShowcase title="Recommended for you" />
        <Space spacing={"my-12"} />
        <Services />
        <Space spacing={"my-12"} />
        <DealOfTheDay /> <Space spacing={"my-12"} />
        <LatestProducts />
      </Wrapper>
      <Space spacing={"my-20"} />
      <Footer />
      {/* <Category />
      <ProductContainer />
      <TestimonialBox /> */}
    </>
  );
}
