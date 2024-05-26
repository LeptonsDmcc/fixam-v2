"use client";

import { useState } from "react";
import ShoppingCart from "../Icons/svgs/ShoppingCart";
import Button from "./Button";

interface Props {
  full?: boolean;
}

const AddToCartButton = ({ full }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Button
      full={full}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      icon={<ShoppingCart color={isHovered ? "orange" : "white"} />}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
