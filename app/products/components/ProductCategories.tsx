import Wrapper from "@/app/components/Wrapper";
import Space from "@/app/components/Spacing/Space";
import SubCategories from "@/app/components/Categories/SubCategories";
import Grid from "@/app/components/Grid";
import BrowseCategories from "@/app/components/Categories/BrowseCategories";
import Filters from "@/app/components/Filters/Filters";
import Products from "@/app/components/Products/Products";
import ProductTopDeals from "@/app/components/Products/ProductTopDeals";
import capitalize from "@/app/lib/capitalize";
import decodePath from "@/app/lib/decodePath";
import FixAdPremium from "@/app/components/FixAds.tsx/FixAdPremium";
import LatestProducts from "@/app/components/Products/LatestProducts";
import BrandPartners from "@/app/components/BrandPartners";

interface Props {
  dealFor: string;
}

const ProductCategories = ({ dealFor }: Props) => {
  return (
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
          <ProductTopDeals title={`Top Deals on ${capitalize(dealFor)}`} />
        </section>
      </Grid>
      <Space spacing="my-12" />
      <FixAdPremium />
      <Space spacing="my-12" />
      <LatestProducts size={4} />
      <Space spacing="my-12" />
      <BrandPartners />
    </Wrapper>
  );
};

export default ProductCategories;
