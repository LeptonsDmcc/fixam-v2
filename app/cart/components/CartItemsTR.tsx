import CartItemTR from "./CartItemTR";
import Space from "@/app/components/Space";
import HR from "@/app/components/HR";
import { Fragment } from "react";

const items = [1, 2];
const CartItemsTR = () => {
  return (
    <>
      {items.map((cartItem, index) => {
        return (
          <Fragment key={cartItem}>
            <Space spacing="my-12" />
            <CartItemTR />
            <Space spacing="my-12" />
            {items.length - 1 === index + 1 ? <HR /> : null}
          </Fragment>
        );
      })}
    </>
  );
};

export default CartItemsTR;
