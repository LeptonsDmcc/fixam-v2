import CartItemTR from "./CartItemTR";
import Space from "@/app/components/Spacing/Space";
import HR from "@/app/components/HR";
import { Fragment } from "react";

const items = [1, 2];
const CartItemsTR = () => {
  return (
    <>
      {items.map((cartItem, index) => {
        return (
          <Fragment key={cartItem}>
            <CartItemTR />
          </Fragment>
        );
      })}
    </>
  );
};

export default CartItemsTR;
