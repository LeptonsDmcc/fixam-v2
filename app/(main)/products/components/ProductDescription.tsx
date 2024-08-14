import ProductTitleBar from "@/app/components/Products/ProductTitleBar";

interface Props {
  description: string;
}
const ProductDescription = ({ description }: Props) => {
  return (
    <section>
      <ProductTitleBar title="Description" noSeeAll />
      <p>{description}</p>
    </section>
  );
};

export default ProductDescription;
