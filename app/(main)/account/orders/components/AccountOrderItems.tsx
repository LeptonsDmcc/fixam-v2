import { Fragment } from "react";
import AccountOrderItem from "./AccountOrderItem";
import { OrderItemType, OrderStatusType, OrderType } from "@/app/lib/types";

interface Props {
  orderItems: OrderItemType[];
  isCanceled: boolean;
  status: OrderStatusType;
  showSeeDetailButton?: boolean;
}

const AccountOrderItems = ({
  orderItems,
  isCanceled,
  status,
  showSeeDetailButton,
}: Props) => {
  if (orderItems.length)
    return (
      <div className=" grid gap-4 lg:grid-cols-2">
        {orderItems.map((item) => (
          <AccountOrderItem
            showSeeDetailButton={showSeeDetailButton}
            key={item.id}
            orderItem={item}
            isCanceled={isCanceled}
            status={status}
          />
        ))}
      </div>
    );
};

export default AccountOrderItems;
