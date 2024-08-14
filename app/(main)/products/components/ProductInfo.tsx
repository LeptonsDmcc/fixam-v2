import AddFavoriteButton from "@/app/components/Buttons/AddFavoriteButton";
import AddToCartButton from "@/app/components/Buttons/AddToCartButton";
import BuyNowButton from "@/app/components/Buttons/BuyNowButton";
import ShareButton from "@/app/components/Buttons/ShareButton";
import Heading from "@/app/components/Heading";
import ProductPrice from "@/app/components/Products/ProductPrice";
import ProductQuantity from "@/app/components/Products/ProductQuantity";
import ReviewsRating from "@/app/components/Reviews/ReviewsRating";
import Space from "@/app/components/Spacing/Space";
import { ProductType } from "@/app/lib/types";
import Link from "next/link";

const ProductInfoSpace = () => <Space spacing="my-6" />;

interface Props {
  product: ProductType;
}
const ProductInfo = ({ product }: Props) => {
  return (
    <section>
      <section className=" text-xs">
        <p className="flex">
          <span className=" font-light">Sold by:</span>
          <Link href="/store/vendor" className="hover:text-gray-400">
            Three Ace Technology Services Ltd
          </Link>
        </p>

        <p className="text-orange-400 bg-orange-100 rounded-sm max-w-fit p-1">
          Official Store
        </p>
      </section>
      <ProductInfoSpace />
      <Heading variant="h4">{product.name}</Heading>
      <ProductInfoSpace />
      <p>
        <span className="text-gray-400 mr-1">Brand:</span>
        <span>{product.brand}</span>
      </p>
      <ProductInfoSpace />
      <ReviewsRating
        reviewCount={product.review_count}
        rating={product.average_rating}
      />
      <ProductInfoSpace />
      <ProductPrice price={product.selling_price} />
      <ProductInfoSpace />
      <div>
        Quantity:
        <ProductQuantity circled />
      </div>
      <ProductInfoSpace />
      <section className="flex items-end gap-6">
        <div className=" flex-grow">
          <BuyNowButton full />
          <ProductInfoSpace />
          <AddToCartButton full />
        </div>
      </section>
      <ProductInfoSpace />
      <section>
        <p>Share With Friends</p>
        <Space spacing="my-2" />
        <ShareButton />
      </section>
    </section>
  );
};

export default ProductInfo;
