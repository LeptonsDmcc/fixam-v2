"use client";

import Overlay from "@/app/(main)/shopping-cart/components/Overlay";
import { useState } from "react";
import AuthPrompt from "../Auth/AuthPrompt";
import Link from "next/link";
import BorderedOrangeButton, { TextColorType } from "./BorderedOrangeButton";

interface Props {
  full?: boolean;
  productSlug: string;
  isAuth: boolean;
  quantity: number;
  onClick?: () => void;
  textColor?: TextColorType;
}
const BuyNowButton = ({
  full,
  quantity,
  productSlug,
  isAuth,
  onClick,
  textColor,
}: Readonly<Props>) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      {showOverlay && (
        <Overlay>
          <AuthPrompt
            from={`/products/p/${productSlug}`}
            to={`/${productSlug}/checkout?bnq=${quantity}`}
            guestLink={`/${productSlug}/checkout?bnq=${quantity}&g=y`}
          />
        </Overlay>
      )}
      {isAuth ? (
        <Link href={`/${productSlug}/checkout?bnq=${quantity}`}>
          <BorderedOrangeButton full={full} textColor={textColor}>
            Buy Now
          </BorderedOrangeButton>
        </Link>
      ) : (
        <BorderedOrangeButton
          onClick={() => setShowOverlay(!showOverlay)}
          full={full}
          textColor={textColor}
        >
          Buy Now
        </BorderedOrangeButton>
      )}
    </>
  );
};

export default BuyNowButton;
