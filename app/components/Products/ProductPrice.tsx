"use client";

import currency from "@/app/lib/currency";
import React from "react";

interface Props {
  discount?: number;
  priceLightGray?: boolean;
}

const ProductPrice = ({ priceLightGray, discount = 950.0 }: Props) => {
  return (
    <p>
      <span className={priceLightGray ? "text-gray-500" : "text-xl mr-1"}>
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
