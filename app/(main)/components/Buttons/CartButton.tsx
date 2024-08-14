import { ShoppingCart } from "iconsax-react";
import ActionButton from "./ActionButton";
import Count from "./Count";

interface Props {
  isMobile?: boolean;
}
const CartButton = ({ isMobile }: Props) => {
  return (
    <ActionButton isMobile={isMobile}>
      <ShoppingCart size={24} className=" text-gray-800" />

      <Count isMobile={isMobile} />
    </ActionButton>
  );
};

export default CartButton;
