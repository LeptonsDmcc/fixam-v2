import ShareButton from "@/app/components/Buttons/ShareButton";
import Heading from "@/app/components/Heading";
import ProductPrice from "@/app/components/Products/ProductPrice";
import ReviewsRating from "@/app/components/Reviews/ReviewsRating";
import Space from "@/app/components/Spacing/Space";
import isAuthenticated from "@/app/lib/data/verifyAuth";
import { ProductType } from "@/app/lib/types";
import ProductDetailButtons from "./ProductDetailButtons";

const ProductInfoSpace = () => <Space spacing="my-6" />;

interface Props {
  product: ProductType;
}

const ProductInfo = async ({ product }: Props) => {
  const isAuth = await isAuthenticated();

  return (
    <section className=" lg:min-w-[50%]">
      <section className=" text-xs">
        {/* <p className="flex">
          <span className=" font-light">Sold by:</span>
          <Link href="/store/vendor" className="hover:text-gray-400">
            Three Ace Technology Services Ltd
          </Link>
        </p> */}

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
      <ProductDetailButtons
        productSlug={product.slug}
        isAuth={isAuth}
        productId={product.id || ""}
        productSellingPrice={product.selling_price}
      />
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
