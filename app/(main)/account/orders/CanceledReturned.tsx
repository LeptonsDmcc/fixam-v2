import { OrderType } from "@/app/lib/types";
import AccountOrderItems from "./components/AccountOrderItems";

interface Props {
  orders: OrderType[];
}
const CanceledReturned = ({ orders }: Props) => {
  if (orders.length)
    return (
      <section id="section2" className="w-full min-w-full flex-grow">
        {orders.map((order) => (
          <AccountOrderItems
            key={order.id}
            orderItems={order.order_items}
            isCanceled={order.is_order_cancelled!}
            status={order.order_delivery_status!}
            showSeeDetailButton
          />
        ))}
      </section>
    );
};

export default CanceledReturned;
