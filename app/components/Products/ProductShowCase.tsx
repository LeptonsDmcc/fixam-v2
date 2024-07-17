import Image from "next/image";
import Card from "../Card";
import ProductPrice from "./ProductPrice";
import Link from "next/link";
import ReviewsRating from "../Reviews/ReviewsRating";
import { ROUTES } from "@/app/lib/contants";

const ProductShowcase = () => {
  return (
    <Link href={`${ROUTES.product}/?p=Dangote BlocMaster Cement`}>
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
