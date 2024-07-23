import ProductCarousel from "@/app/components/Products/ProductCarousel";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import ImagePreview from "./ImagePreview";
import ProductInfo from "./ProductInfo";
import ProductOverviewPanel from "./ProductOverviewPanel";
import { ProductType } from "@/app/lib/types";

const ProductDetail = async () => {
  const productsRes = await fetch(`${process.env.FIXAM_BASE_URL}/products/`);
  const productsJsonRes = await productsRes.json();
  const products: ProductType[] = productsJsonRes.results;

  return (
    <Wrapper>
      <SectionSpacing />
      <section className="flex flex-col gap-6 lg:flex-row">
        <ImagePreview />
        <ProductInfo />
      </section>
      <SectionSpacing />
      <ProductCarousel products={products} title="Related Item" />
      <SectionSpacing />
      <ProductOverviewPanel />
      <SectionSpacing />
      <ProductCarousel products={products} title="More items from seller" />
    </Wrapper>
  );
};

export default ProductDetail;
