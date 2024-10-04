import { getUserWishlist, isFavorite } from "@/app/lib/data/product";
import isAuthenticated from "@/app/lib/data/verifyAuth";
import { ProductType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { LuCrown } from "react-icons/lu";
import AddFavoriteButton from "../Buttons/AddFavoriteButton";
import AddToCartButton from "../Buttons/AddToCartButton";
import BuyNowButton from "../Buttons/BuyNowButton";
import ProgressBar from "../ProgressIndicators/ProgressBar";
import ReviewsRating from "../Reviews/ReviewsRating";
import BaseSpacing from "../Spacing/BaseSpacing";
import Space from "../Spacing/Space";
import ProductPrice from "./ProductPrice";
import getAuthUser from "@/app/lib/data/user";

interface Props {
  inDealOfTheDay?: boolean;
  product: ProductType;
}

const ProductCard = async ({ product, inDealOfTheDay }: Props) => {
  const isAuth = await isAuthenticated();
  const wishList = await getUserWishlist();
  const user = await getAuthUser();

  return (
    <article
      className="rounded-md select-none w-[210px]
      md:w-[292px]"
    >
      <div className="group relative rounded-md">
        <div className="h-[200px]">
          <Image
            src={Object.values(product.images[0])[0]}
            alt={product.name}
            width={292}
            height={200}
            className="w-full h-full object-contain rounded-t-md"
          />
        </div>

        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 left-0 
          bg-black/20 rounded-t-md opacity-0 invisible group-hover:opacity-100 
          group-hover:visible duration-300"
        >
          <div
            className="absolute flex items-center justify-center 
            flex-col w-full h-full gap-6"
          >
            <AddToCartButton
              productId={product.id || ""}
              productPrice={product.selling_price}
              isAuth={isAuth}
            />
            <BuyNowButton
              textColor="white"
              productSlug={product.slug}
              isAuth={isAuth}
              quantity={1}
            />
          </div>
        </div>
        {product.is_dod && (
          <LuCrown
            size={24}
            className="absolute left-2 top-2 text-orange-400"
          />
        )}
        {isAuth && (
          <div className="absolute right-2 top-2">
            <AddFavoriteButton
              userId={user?.id}
              productId={product.id!}
              // isFavorited={isFavorited}
              wishList={wishList}
            />
          </div>
        )}
      </div>
      <Link href={`/products/p/${product.slug}`}>
        <Space spacing="my-4" />
        <p className=" line-clamp-1">{product.name}</p>
        <Space spacing="my-4" />
        <ReviewsRating
          rating={product.average_rating}
          reviewCount={product.review_count}
        />
        <Space spacing="my-4" />
        <ProductPrice price={product.selling_price} />
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
