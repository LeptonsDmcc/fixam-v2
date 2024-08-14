import Image from "next/image";
import Space from "../../components/Spacing/Space";
import ProductPrice from "../../components/Products/ProductPrice";
import ProductQuantity from "../../components/Products/ProductQuantity";
import TrashBin from "../../components/TrashBin";

const CartItemTR = () => {
  return (
    <tr
      className="flex justify-between w-full items-center py-6  
    last-of-type:border-b-0 border-b flex-wrap
    md:py-12"
    >
      <td
        className="flex items-center w-1/3 
      md:flex-grow md:w-auto"
      >
        <>
          {/* <Checkbox /> */}
          <div className="flex items-center gap-3">
            <div
              className="ml-2 hidden
             md:block"
            >
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

      <td
        className="w-1/3 md:w-[22.5%] text-center
      md:text-left"
      >
        <ProductPrice discount={0} textSize="sm" />
      </td>

      <td className="w-1/3 md:w-[22.5%]">
        <ProductQuantity />
      </td>

      <td
        className="w-full flex justify-end mt-5
      md:w-[5%] md:block md:mt-0"
      >
        <TrashBin />
      </td>
    </tr>
  );
};

export default CartItemTR;
