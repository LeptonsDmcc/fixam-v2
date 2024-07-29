import Image from "next/image";
import Card from "../Card";
import ProductPrice from "./ProductPrice";
import Link from "next/link";
import ReviewsRating from "../Reviews/ReviewsRating";
import { ROUTES } from "@/app/lib/contants";
import { ProductType } from "@/app/lib/types";
import getImageFromArrObj from "@/app/lib/getImageFromArrObj";

interface Props {
  product: ProductType;
}

const ProductShowcase = ({ product }: Props) => {
  return (
    <Link href={`${ROUTES.product}/?p=${product.name}`}>
      <Card styles="flex gap-4 min-w-[400px]">
        <div className="h-[170px] w-[190px]">
          <Image
            src={getImageFromArrObj(product.images)}
            alt={product.name}
            width={190}
            height={170}
            className=" h-full w-full bg-cover"
          />
        </div>
        <div className="w-[220px] flex flex-col justify-between">
          {product.name}
          <ReviewsRating />
          <ProductPrice price={product.selling_price} />
        </div>
      </Card>
    </Link>
  );
};

export default ProductShowcase;
