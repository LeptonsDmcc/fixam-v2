import Image from "next/image";
import Card from "../../components/Card";
import Space from "../../components/Spacing/Space";
import ProductPrice from "../../components/Products/ProductPrice";
import AddToCartButton from "../../components/Buttons/AddToCartButton";
import TrashBin from "../../components/TrashBin";

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
        <AddToCartButton />
      </div>

      <div
        className="flex flex-col justify-between items-center h-24 lg:w-[5%]
      lg:flex-row"
      >
        <div className="lg:hidden">
          <AddToCartButton cartOnly />
        </div>
        <TrashBin />
      </div>
    </Card>
  );
};

export default SavedItem;
