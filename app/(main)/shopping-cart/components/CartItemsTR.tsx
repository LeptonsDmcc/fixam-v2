import { Fragment } from "react";
import CartItemTR from "./CartItemTR";

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
