import { PropsWithChildren } from "react";
import BorderedOrangeButton from "./BorderedOrangeButton";

interface Props {
  full?: boolean;
}
const BuyNowButton = ({ full }: Props) => {
  return <BorderedOrangeButton full={full}>Buy Now</BorderedOrangeButton>;
};

export default BuyNowButton;
