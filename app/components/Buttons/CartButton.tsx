import ShoppingCart from "../Icons/svgs/ShoppingCart";
import ActionButton from "./ActionButton";
import Count from "./Count";

interface Props {
  isMobile?: boolean;
}
const CartButton = ({ isMobile }: Props) => {
  return (
    <ActionButton isMobile={isMobile}>
      <ShoppingCart />

      <Count isMobile={isMobile} />
    </ActionButton>
  );
};

export default CartButton;
