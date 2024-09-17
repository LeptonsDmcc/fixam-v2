"use client";

import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import ProductDetailQuantity from "./ProductDetailQuantity";
import Link from "next/link";
import BuyNowButton from "@/app/components/Buttons/BuyNowButton";
import AddToCartButton from "@/app/components/Buttons/AddToCartButton";
import { useState } from "react";
import Overlay from "../../shopping-cart/components/Overlay";
import AuthPrompt from "@/app/components/Auth/AuthPrompt";

interface Props {
  productSlug: string;
  isAuth: boolean;
  productId: string;
  productSellingPrice: number;
}
const ProductDetailButtons = ({
  productSlug,
  isAuth,
  productId,
  productSellingPrice,
}: Readonly<Props>) => {
  const [quantity, setQuantity] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div>
      <ProductDetailQuantity
        quantity={quantity}
        handleUpdateQuantity={setQuantity}
      />
      <BaseSpacing />
      <div className="flex-grow">
        <BuyNowButton
          productSlug={productId}
          isAuth={isAuth}
          quantity={quantity}
          full
        />

        <BaseSpacing />
        <AddToCartButton
          full
          isAuth={isAuth}
          productId={productId}
          productPrice={productSellingPrice}
          productQuantity={quantity}
        />
      </div>
    </div>
  );
};

export default ProductDetailButtons;
