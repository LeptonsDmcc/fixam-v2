"use client";

import { ShoppingBag, ShoppingCart } from "iconsax-react";
import { useState } from "react";
import Button from "./Button";
import useCartStore from "@/app/(main)/store/cart";

interface Props {
  full?: boolean;
  cartOnly?: boolean;
  productId: string;
  productPrice: number;
  productQuantity?: number;
  isAuth: boolean;
}

const AddToCartButton = ({
  cartOnly,
  full,
  productId,
  productPrice,
  productQuantity,
  isAuth,
}: Props) => {
  const { addItem } = useCartStore();

  if (cartOnly) return <ShoppingCart />;

  return (
    // <form action={addItemToCartAction.bind(null, productId)}>
    <Button
      onClick={() =>
        addItem(
          {
            prod_id: productId,
            quantity: productQuantity || 1,
            price: productPrice,
          },
          isAuth
        )
      }
      full={full}
      icon={<ShoppingCart />}
    >
      Add to Cart
    </Button>
    // </form>
  );
};

export default AddToCartButton;
