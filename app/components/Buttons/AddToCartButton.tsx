"use client";

import { useState } from "react";
import MyShoppingCart from "../Icons/svgs/ShoppingCart";
import Button from "./Button";
import { ShoppingCart } from "iconsax-react";

interface Props {
  full?: boolean;
  cartOnly?: boolean;
}

const AddToCartButton = ({ cartOnly, full }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (cartOnly) return <ShoppingCart />;

  return (
    <Button
      full={full}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      icon={<MyShoppingCart color={isHovered ? "orange" : "white"} />}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
