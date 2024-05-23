import Image from "next/image";
import Card from "../Card";
import ProductPrice from "./ProductPrice";
import ReviewsRating from "./ReviewsRating";

const ProductShowcase = () => {
  return (
    <Card styles="flex gap-4 min-w-[400px]">
      <Image src={"/assets/cement.png"} alt={""} width={190} height={170} />
      <div className="w-[220px] flex flex-col justify-between">
        <p>Dangote BlocMaster Cement</p>
        <ReviewsRating />
        <ProductPrice />
      </div>
    </Card>
  );
};

export default ProductShowcase;
