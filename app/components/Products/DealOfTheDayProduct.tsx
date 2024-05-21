import Image from "next/image";
import Button from "../Buttons/Button";
import ShowcaseRating from "../Reviews/ShowcaseRating";
import ProductPrice from "./ProductPrice";
import Heading from "../Heading";
import Space from "../Space";
import AddToCartButton from "../Buttons/AddToCartButton";

const DealOfTheDayProduct = () => {
  return (
    <section className="flex gap-6 p-20 justify-between">
      <Image src={"/assets/television.png"} alt={""} width={368} height={298} />
      <div className="w-[442px]">
        <Heading variant={"h4"}>
          <span className="font-semibold">
            Brown Grey Designer Luxury Fashion Unisex Sunglasses
          </span>
        </Heading>
        <Space spacing={"my-[20px]"} />
        <ProductPrice />
        <Space spacing={"my-[20px]"} />
        <ShowcaseRating />
        <Space spacing={"my-[20px]"} />
        <AddToCartButton />
        <Space spacing={"my-[20px]"} />
        <span className="text-xs">15 Item left</span>
        <Space spacing={"my-[20px]"} />
        <div className="bg-gray-200 rounded-md h-[6px] w-[140px]">
          <div className="bg-orange-400 rounded-md h-[6px] w-[35%]"></div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDayProduct;
