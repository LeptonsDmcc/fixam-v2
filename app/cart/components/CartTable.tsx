import HR from "@/app/components/HR";
import Checkbox from "@/app/components/Inputs/Checkbox";
import Space from "@/app/components/Space";
import CartItemsTR from "./CartItemsTR";

const CartTable = () => {
  return (
    <table className=" flex-grow">
      <thead>
        <tr className="flex justify-between items-center w-full">
          <th className="flex uppercase items-center gap-6 flex-grow">
            <Checkbox />
            <span>PRODUCT</span>
          </th>
          <th className="flex uppercase items-center gap-6 w-[22.5%]">Price</th>
          <th className="flex uppercase items-center gap-6 w-[22.5%]">
            Quantity
          </th>
          <th className=" w-[5%]"></th>
        </tr>
      </thead>
      <Space spacing="my-12" />
      <HR />
      <tbody>
        <CartItemsTR />
      </tbody>
    </table>
  );
};

export default CartTable;
