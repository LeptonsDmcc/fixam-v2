"use client";

import { useEffect } from "react";
import { initializeCartStore } from "../lib/data/cart";
import useCartStore from "./store/cart";

interface Props {
  isAuth: boolean;
  accessToken: string;
}

const MergeCart = ({ isAuth, accessToken }: Readonly<Props>) => {
  const { initializeCartItems, cartItems } = useCartStore();
  useEffect(() => {
    const fetchAndInitializeCart = async () => {
      const result = await initializeCartStore(isAuth, accessToken);
      initializeCartItems(result);
    };

    // if (isAuth && accessToken) {
    fetchAndInitializeCart();
    // }
  }, [isAuth, accessToken]);

  return <></>;
};

export default MergeCart;
