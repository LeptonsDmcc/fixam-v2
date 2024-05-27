"use client";

import currency from "@/app/lib/currency";
import React from "react";

interface Props {
  discount?: number;
}
const ProductPrice = ({ discount = 950.0 }: Props) => {
  return (
    <p>
      <span className="text-xl mr-1">{currency()}850.00</span>
      {discount ? (
        <del className="text-sm text-gray-500">
          {currency()} {discount}
        </del>
      ) : null}
    </p>
  );
};

export default ProductPrice;
