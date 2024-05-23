import { useState } from "react";
import ShoppingCart from "../Icons/svgs/ShoppingCart";
import Button from "./Button";

const AddToCartButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      icon={<ShoppingCart color={isHovered ? "orange" : "white"} />}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
