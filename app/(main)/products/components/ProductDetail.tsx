import ProductCarousel from "@/app/components/Products/ProductCarousel";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import getIdFromString from "@/app/lib/data/getIdFromString";
import { ProductType } from "@/app/lib/types";
import ImagePreview from "./ImagePreview";
import ProductInfo from "./ProductInfo";
import ProductOverviewPanel from "./ProductOverviewPanel";

interface Props {
  product: ProductType;
}

const ProductDetail = async ({ product }: Props) => {
  const productsRes = await fetch(
    `${process.env.FIXAM_BASE_URL}/products/categories/${getIdFromString(
      product.category || "32ce9760-c703-41b3-8d6b-09a8537706b4"
    )}/random_products/`
  );

  const productsJsonRes = await productsRes.json();
  const products: ProductType[] = productsJsonRes;

  return (
    <Wrapper>
      <SectionSpacing />
      <section className="flex flex-col gap-6 lg:flex-row">
        <ImagePreview images={product.images} alt={product.name} />
        <ProductInfo product={product} />
      </section>
      <SectionSpacing />
      <ProductCarousel products={products} title="Related Item" />
      <SectionSpacing />
      <ProductOverviewPanel product={product} />
      <SectionSpacing />
      <ProductCarousel products={products} title="More items from seller" />
    </Wrapper>
  );
};

export default ProductDetail;
