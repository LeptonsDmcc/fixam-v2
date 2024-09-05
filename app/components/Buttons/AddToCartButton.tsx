"use client";

import { ShoppingCart } from "iconsax-react";
import { useState } from "react";
import Button from "./Button";
import useCartStore from "@/app/(main)/store/cart";

interface Props {
  full?: boolean;
  cartOnly?: boolean;
  productId: string;
  productPrice: number;
  isAuth: boolean;
}

const AddToCartButton = ({
  cartOnly,
  full,
  productId,
  productPrice,
  isAuth,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCartStore();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (cartOnly) return <ShoppingCart />;

  return (
    // <form action={addItemToCartAction.bind(null, productId)}>
    <Button
      onClick={() =>
        addItem(
          { prod_id: productId, quantity: 1, price: productPrice },
          isAuth
        )
      }
      full={full}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      icon={<ShoppingCart color={isHovered ? "orange" : "white"} />}
    >
      Add to Cart
    </Button>
    // </form>
  );
};

export default AddToCartButton;
