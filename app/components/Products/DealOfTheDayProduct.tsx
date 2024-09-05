import { ROUTES } from "@/app/lib/contants";
import getImageFromArrObj from "@/app/lib/getImageFromArrObj";
import { ProductType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../Buttons/AddToCartButton";
import Heading from "../Heading";
import ProgressBar from "../ProgressIndicators/ProgressBar";
import ShowcaseRating from "../Reviews/ShowcaseRating";
import Space from "../Spacing/Space";
import ProductPrice from "./ProductPrice";
import isAuthenticated from "@/app/lib/data/verifyAuth";

interface Props {
  product: ProductType;
}

const DealOfTheDayProduct = async ({ product }: Props) => {
  const isAuth = await isAuthenticated();
  return (
    <section className="flex gap-6 p-20 justify-between min-w-full">
      <Image
        src={getImageFromArrObj(product.images)}
        alt={product.name}
        width={368}
        height={298}
      />
      <div className="w-[442px]">
        <Link
          href={`${ROUTES.product}/?p=Brown Grey Designer Luxury Fashion Unisex Sunglasses`}
        >
          <Heading variant={"h4"}>
            <span className="font-semibold">{product.name}</span>
          </Heading>
          <Space spacing={"my-[20px]"} />
          <ProductPrice price={product.selling_price} />
          <Space spacing={"my-[20px]"} />
        </Link>

        <ShowcaseRating rating={product.average_rating} />
        <Space spacing={"my-[20px]"} />
        <AddToCartButton
          productId={product.id || ""}
          productPrice={product.selling_price}
          isAuth={isAuth}
        />
        <Space spacing={"my-[20px]"} />
        <span className="text-xs">15 Item left</span>
        <Space spacing={"my-[20px]"} />
        <div className="w-[140px]">
          <ProgressBar />
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDayProduct;
