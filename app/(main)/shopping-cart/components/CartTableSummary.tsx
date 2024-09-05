"use client";

import { initializeCartStore } from "@/app/lib/data/cart";
import CartTable from "./CartTable";
import CheckoutSummary from "./CheckoutSummary";
import { useEffect } from "react";

interface Props {
  fixamBaseUrl: string;
  isAuth: boolean;
  accessToken: string;
}

const CartTableSummary = ({ fixamBaseUrl, isAuth, accessToken }: Props) => {
  useEffect(() => {
    const initV = async () => {
      const cartValue = await initializeCartStore(isAuth, accessToken);
    };

    initV();
  }, []);
  return (
    <section
      className="flex flex-col gap-11 
    md:flex-row"
    >
      <CartTable fixamBaseUrl={fixamBaseUrl || ""} isAuth={isAuth} />
      <section className="lg:min-w-[200px] lg:w-[400px] lg:max-w-[400px]">
        <CheckoutSummary />
      </section>
    </section>
  );
};

export default CartTableSummary;
