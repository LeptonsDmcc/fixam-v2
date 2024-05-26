import Space from "@/app/components/Space";
import Wrapper from "@/app/components/Wrapper";
import ImagePreview from "./ImagePreview";
import ProductInfo from "./ProductInfo";

const ProductDetail = () => {
  return (
    <Wrapper>
      <Space spacing="my-12" />
      <section className="flex gap-6">
        <ImagePreview />
        <ProductInfo />
      </section>
    </Wrapper>
  );
};

export default ProductDetail;
