import { OrderType } from "@/app/lib/types";
import AccountOrderItems from "./components/AccountOrderItems";

interface Props {
  orders: OrderType[];
}

const OnGoingDelivered = ({ orders }: Props) => {
  if (orders.length)
    return (
      <section id="section1" className=" w-full min-w-full flex-grow">
        {orders.map((order) => (
          <AccountOrderItems
            orderItems={order.order_items}
            isCanceled={order.is_order_cancelled!}
            status={order.order_delivery_status!}
            showSeeDetailButton
          />
        ))}
      </section>
    );
};

export default OnGoingDelivered;
