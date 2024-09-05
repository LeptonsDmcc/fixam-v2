"use client";

import { ShoppingCart } from "iconsax-react";
import ActionButton from "./ActionButton";
import Count from "./Count";
import useCartStore from "@/app/(main)/store/cart";

interface Props {
  isMobile?: boolean;
}

const CartButton = ({ isMobile }: Props) => {
  const { cartItems } = useCartStore();

  return (
    <ActionButton isMobile={isMobile}>
      <ShoppingCart size={24} className=" text-gray-800" />

      <Count isMobile={isMobile} itemCount={cartItems && cartItems.length} />
    </ActionButton>
  );
};

export default CartButton;
