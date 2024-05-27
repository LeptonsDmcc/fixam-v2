import Checkbox from "@/app/components/Inputs/Checkbox";
import Image from "next/image";
import Space from "@/app/components/Space";
import ProductPrice from "@/app/components/Products/ProductPrice";
import ProductQuantity from "@/app/components/Products/ProductQuantity";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItemTR = () => {
  return (
    <tr className="flex justify-between w-full items-center ">
      <td className="flex items-center flex-grow">
        <>
          <Checkbox />
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
      </td>

      <td className="w-[22.5%]">
        <ProductPrice discount={0} />
      </td>

      <td className="w-[22.5%]">
        <ProductQuantity />
      </td>

      <td className=" w-[5%]">
        <RiDeleteBin6Line className=" cursor-pointer text-red-500" />
      </td>
    </tr>
  );
};

export default CartItemTR;
