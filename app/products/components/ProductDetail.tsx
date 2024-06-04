import ProductsShowcase from "@/app/components/Products/ProductsShowcase";
import Space from "@/app/components/Spacing/Space";
import Wrapper from "@/app/components/Wrapper";
import ImagePreview from "./ImagePreview";
import ProductInfo from "./ProductInfo";
import ProductOverviewPanel from "./ProductOverviewPanel";

const ProductDetail = () => {
  return (
    <Wrapper>
      <Space spacing="my-12" />
      <section className="flex gap-6">
        <ImagePreview />
        <ProductInfo />
      </section>
      <Space spacing="my-12" />
      <ProductsShowcase
        title="Related Item"
        withShortDescription={false}
        noSeeAll
      />
      <Space spacing="my-12" />
      <ProductOverviewPanel />
      <Space spacing="my-12" />
      <ProductsShowcase
        title="More items from this seller"
        withShortDescription={false}
        noSeeAll
      />
    </Wrapper>
  );
};

export default ProductDetail;
