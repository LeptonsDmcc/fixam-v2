"use client";

import { RxHeart, RxHeartFilled } from "react-icons/rx";
import Space from "../Space";
import ProductPrice from "./ProductPrice";
import ReviewsRating from "./ReviewsRating";
import Image from "next/image";
import { LuCrown } from "react-icons/lu";
import AddToCartButton from "../Buttons/AddToCartButton";
import Button from "../Buttons/Button";
import AddFavorite from "./AddFavorite";

const ProductCard = () => {
  return (
    <article className="rounded-md select-none">
      <div className="group relative rounded-md">
        <Image src={"/assets/watch.jpg"} alt={""} width={292} height={200} />
        <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-black/20 rounded-t-md
         opacity-0 invisible group-hover:opacity-100 group-hover:visible dur3"
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <AddToCartButton />
            <Space spacing={"my-6"} />
            <Button variant="border">Buy Now</Button>
          </div>
        </div>
        <LuCrown size={24} className="absolute left-2 top-2 text-orange-400" />
        <AddFavorite isFavorited={true} />
      </div>
      <Space spacing="my-4" />
      <p>HISENSE Cool Breeze Air Conditioner</p>
      <Space spacing="my-4" />
      <ReviewsRating />
      <Space spacing="my-4" />
      <ProductPrice />
    </article>
  );
};

export default ProductCard;
