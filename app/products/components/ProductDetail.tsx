import ProductCarousel from "@/app/components/Products/ProductCarousel";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import ImagePreview from "./ImagePreview";
import ProductInfo from "./ProductInfo";
import ProductOverviewPanel from "./ProductOverviewPanel";

const ProductDetail = () => {
  return (
    <Wrapper>
      <SectionSpacing />
      <section className="flex flex-col gap-6 md:flex-row">
        <ImagePreview />
        <ProductInfo />
      </section>
      <SectionSpacing />
      <ProductCarousel title="Related Item" />
      <SectionSpacing />
      <ProductOverviewPanel />
      <SectionSpacing />
      <ProductCarousel title="More items from seller" />
    </Wrapper>
  );
};

export default ProductDetail;
