import BrowseCategories from "@/app/components/Categories/BrowseCategories";
import SubCategories from "@/app/components/Categories/SubCategories";
import Filters from "@/app/components/Filters/Filters";
import Grid from "@/app/components/Grid";
import ProductTopDeals from "@/app/components/Products/ProductTopDeals";
import Products from "@/app/components/Products/Products";
import Space from "@/app/components/Space";
import Wrapper from "@/app/components/Wrapper";
import capitalize from "@/app/lib/capitalize";
import decodePath from "@/app/lib/decodePath";
import BreadcrumbHeader from "./BreadcrumbHeader";
import FixAdPremium from "@/app/components/FixAds.tsx/FixAdPremium";
import LatestProducts from "@/app/components/Products/LatestProducts";
import Footer from "@/app/components/Footer/Footer";
import BrandPartners from "@/app/components/BrandPartners";
import Carousel from "@/app/components/Carousel/Carousel";

interface Props {
  params: { slug: string[] };
}

const ProductsPage = ({ params: { slug } }: Props) => {
  return (
    <main>
      <BreadcrumbHeader paths={slug} />
      <Wrapper>
        <Space spacing="my-12" />
        <SubCategories />
        <Space spacing="my-12" />
        <Grid cols={2}>
          <section>
            <BrowseCategories isCollapsible={true} />
            <Space spacing="my-6" />
            <Filters />
          </section>

          <section>
            <Products />
            <Space spacing="my-12" />
            <ProductTopDeals
              title={`Top Deals on ${capitalize(
                decodePath(slug.join("/")).at(-1) || ""
              )}`}
            />
          </section>
        </Grid>
        <Space spacing="my-12" />
        <FixAdPremium />
        <Space spacing="my-12" />
        <LatestProducts size={4} />
        <Space spacing="my-12" />
        <BrandPartners />
      </Wrapper>
      <Space spacing="my-12" />
      <Footer />
    </main>
  );
};

export default ProductsPage;
