import Image from "next/image";
import Card from "../Card";
import ProductPrice from "./ProductPrice";
import ReviewsRating from "./ReviewsRating";
import Link from "next/link";

const ProductShowcase = () => {
  return (
    <Link href={`/products/?p=Dangote BlocMaster Cement`}>
      <Card styles="flex gap-4 min-w-[400px]">
        <Image src={"/assets/cement.png"} alt={""} width={190} height={170} />
        <div className="w-[220px] flex flex-col justify-between">
          Dangote BlocMaster Cement
          <ReviewsRating />
          <ProductPrice />
        </div>
      </Card>
    </Link>
  );
};

export default ProductShowcase;
