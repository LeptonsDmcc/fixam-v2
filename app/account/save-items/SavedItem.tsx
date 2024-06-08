import AddToCartButton from "@/app/components/Buttons/AddToCartButton";
import ProductPrice from "@/app/components/Products/ProductPrice";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import Space from "@/app/components/Spacing/Space";
import Card from "@/app/components/Card";

const SavedItem = () => {
  return (
    <Card borderedCard styles="flex justify-between w-full items-center">
      <div className="flex items-center flex-grow">
        <>
          <div className="flex items-center gap-3">
            <div className="ml-2">
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

      <div className="w-[22.5%]">
        <AddToCartButton />
      </div>

      <div className=" w-[5%]">
        <RiDeleteBin6Line className=" cursor-pointer text-red-500" />
      </div>
    </Card>
  );
};

export default SavedItem;
