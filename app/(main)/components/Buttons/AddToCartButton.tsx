"use client";

import { ShoppingCart } from "iconsax-react";
import { useState } from "react";
import Button from "./Button";

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
      icon={<ShoppingCart color={isHovered ? "orange" : "white"} />}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
