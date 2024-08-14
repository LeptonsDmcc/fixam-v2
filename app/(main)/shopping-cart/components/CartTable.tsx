"use client";

import CartItemsTR from "./CartItemsTR";

const CartTable = () => {
  return (
    <>
      <table className="flex-grow">
        <thead>
          <tr className="flex justify-between items-center w-full border-b pb-8">
            <th
              className="flex uppercase items-center gap-6 w-1/3 
            md:flex-grow md:w-auto"
            >
              <span>PRODUCT</span>
            </th>
            <th
              className="flex uppercase items-center gap-6 w-1/3 justify-center
            md:w-[22.5%] md:justify-start"
            >
              Price
            </th>
            <th
              className="flex uppercase items-center gap-6 w-1/3 justify-end 
            md:w-[22.5%] md:justify-start "
            >
              Quantity
            </th>
            <th className=" w-[5%]"></th>
          </tr>
        </thead>
        {/* <Space spacing="my-12" />*/}
        <tbody>
          <CartItemsTR />
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
