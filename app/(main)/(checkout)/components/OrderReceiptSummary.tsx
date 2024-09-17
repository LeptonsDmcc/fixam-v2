"use client";

import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import { Fragment } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import useCartStore from "../../store/cart";

const OrderReceiptSummary = () => {
  const { cartItems } = useCartStore();

  return (
    <>
      {[1, 2, 3].map((item) => (
        <Fragment key={item}>
          <ContentSpacing />
          <OrderSummaryItem
            isReceipt
            orderItem={{
              prod_id: "467d7ed2-2341-4354-82c2-d9ab710d698c",
              quantity: 2,
            }}
          />
          <ContentSpacing />
        </Fragment>
      ))}
    </>
  );
};

export default OrderReceiptSummary;
