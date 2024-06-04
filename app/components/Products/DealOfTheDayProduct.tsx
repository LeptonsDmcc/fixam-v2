import Image from "next/image";
import Button from "../Buttons/Button";
import ShowcaseRating from "../Reviews/ShowcaseRating";
import ProductPrice from "./ProductPrice";
import Heading from "../Heading";
import Space from "../Spacing/Space";
import AddToCartButton from "../Buttons/AddToCartButton";
import Link from "next/link";
import ProgressBar from "../ProgressIndicators/ProgressBar";

const DealOfTheDayProduct = () => {
  return (
    <section className="flex gap-6 p-20 justify-between min-w-full">
      <Image src={"/assets/television.png"} alt={""} width={368} height={298} />
      <div className="w-[442px]">
        <Link
          href={`/products/?p=Brown Grey Designer Luxury Fashion Unisex Sunglasses`}
        >
          <Heading variant={"h4"}>
            <span className="font-semibold">
              Brown Grey Designer Luxury Fashion Unisex Sunglasses
            </span>
          </Heading>
          <Space spacing={"my-[20px]"} />
          <ProductPrice />
          <Space spacing={"my-[20px]"} />
        </Link>

        <ShowcaseRating />
        <Space spacing={"my-[20px]"} />
        <AddToCartButton />
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
