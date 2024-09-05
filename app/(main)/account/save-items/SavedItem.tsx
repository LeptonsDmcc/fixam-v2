import AddToCartButton from "@/app/components/Buttons/AddToCartButton";
import Card from "@/app/components/Card";
import ProductPrice from "@/app/components/Products/ProductPrice";
import Space from "@/app/components/Spacing/Space";
import TrashBin from "@/app/components/TrashBin";
import Image from "next/image";

const SavedItem = () => {
  return (
    <Card borderedCard styles="flex justify-between w-full items-center">
      <div
        className="w-[50%] flex items-center 
      lg:flex-grow lg:w-auto"
      >
        <>
          <div className="flex items-center gap-3">
            <div className="hidden lg:ml-2 lg:block">
              <Image
                src="/assets/products/watch-1.jpg"
                alt=""
                width={120}
                height={120}
                className=" rounded-md"
              />
            </div>

            <div>
              <h4>Rice Master Rice Cooker</h4>
              <Space spacing="py-1" />
              <p className=" text-xs text-gray-400">
                Sold by: Three Ace Technology Services Ltd
              </p>
            </div>
          </div>
        </>
      </div>

      <div className="w-[22.5%] text-center">
        <ProductPrice discount={0} />
      </div>

      <div className="w-[22.5%] hidden lg:block">
        <AddToCartButton productId={""} productPrice={0} />
      </div>

      <div
        className="flex flex-col justify-between items-center h-24 lg:w-[5%]
      lg:flex-row"
      >
        <div className="lg:hidden">
          <AddToCartButton cartOnly productId={""} productPrice={0} />
        </div>
        <TrashBin />
      </div>
    </Card>
  );
};

export default SavedItem;
