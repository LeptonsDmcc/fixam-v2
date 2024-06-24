"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuCrown } from "react-icons/lu";
import AddFavoriteButton from "../Buttons/AddFavoriteButton";
import AddToCartButton from "../Buttons/AddToCartButton";
import BuyNowButton from "../Buttons/BuyNowButton";
import Space from "../Spacing/Space";
import ProductPrice from "./ProductPrice";
import ReviewsRating from "../Reviews/ReviewsRating";
import BaseSpacing from "../Spacing/BaseSpacing";
import ProgressBar from "../ProgressIndicators/ProgressBar";

interface Props {
  inDealOfTheDay?: boolean;
}
const ProductCard = ({ inDealOfTheDay }: Props) => {
  const pathname = usePathname();
  return (
    <article
      className="rounded-md select-none w-[210px]
      md:w-[292px]"
    >
      <div className="group relative rounded-md">
        <Image
          src={"/assets/watch.jpg"}
          alt={""}
          width={292}
          height={200}
          className="w-full rounded-t-md"
        />
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 left-0 bg-black/20 rounded-t-md
           opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300"
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <AddToCartButton />
            <Space spacing={"my-6"} />
            <BuyNowButton />
          </div>
        </div>
        <LuCrown size={24} className="absolute left-2 top-2 text-orange-400" />
        <div className="absolute right-2 top-2">
          <AddFavoriteButton isFavorited={false} />
        </div>
      </div>
      <Link
        href={`${
          pathname === "/" ? "/products" : pathname
        }/?p=HISENSE Cool Breeze Air Conditioner`}
      >
        <Space spacing="my-4" />
        HISENSE Cool Breeze Air Conditioner
        <Space spacing="my-4" />
        <ReviewsRating />
        <Space spacing="my-4" />
        <ProductPrice />
        {inDealOfTheDay && (
          <>
            <BaseSpacing />
            <footer className="flex items-center gap-4">
              <div className="w-1/2">
                <ProgressBar />
              </div>
              <span className="text-sm">15 Item left</span>
            </footer>
          </>
        )}
      </Link>
    </article>
  );
};

export default ProductCard;
