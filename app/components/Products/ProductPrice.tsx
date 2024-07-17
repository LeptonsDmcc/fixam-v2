"use client";

import currency from "@/app/lib/currency";
import React from "react";

type TextSizeType = "xs" | "sm" | "base" | "lg" | "xl";

interface Props {
  discount?: number;
  priceLightGray?: boolean;
  textSize?: TextSizeType;
}

const ProductPrice = ({
  priceLightGray,
  textSize = "base",
  discount = 950.0,
}: Props) => {
  const textSizes: { [key in TextSizeType]: string } = {
    xs: "text-xs",
    sm: "md:text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };
  return (
    <p>
      <span
        className={
          priceLightGray ? "text-gray-500" : `${textSizes[textSize]}  mr-1"`
        }
      >
        {currency()}850.00
      </span>
      {discount ? (
        <del className="text-sm text-gray-500">
          {currency()} {discount}
        </del>
      ) : null}
    </p>
  );
};

export default ProductPrice;
