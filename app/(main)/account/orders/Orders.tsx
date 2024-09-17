import Button from "@/app/components/Buttons/Button";
import HR from "@/app/components/HR";
import NavLink from "@/app/components/Navigations/NavLink";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import { ROUTES } from "@/app/lib/contants";
import AccountHeader from "../components/AccountHeader";
import CanceledReturned from "./CanceledReturned";
import OnGoingDelivered from "./OnGoingDelivered";
import { OrderType } from "@/app/lib/types";
import { Suspense } from "react";

interface Props {
  orders: OrderType[];
}

const Orders = ({ orders }: Props) => {
  console.log("onGoingDeliveredOrders", orders);

  const onGoingDeliveredOrders = orders.filter(
    (order) => !order.is_order_cancelled
  );

  const canceledReturnedOrders = orders.filter(
    (order) => order.is_order_cancelled
  );

  return (
    <Suspense fallback={<p>Loading Orders...</p>}>
      <section>
        <AccountHeader>Orders</AccountHeader>
        <AccountSpacing />
        <nav className=" flex gap-10">
          <NavLink
            href={`${ROUTES.account}/orders/?s=1#section1`}
            activeClassName="after:h-[1px] after:content-[''] after:block after:rounded-sm after:w-full after:bg-orange-400"
          >
            <Button variant="text">
              <span className=" text-xs ">ONGOING/DELIVERED</span>
            </Button>
          </NavLink>

          <NavLink
            href={`${ROUTES.account}/orders/?s=2#section2`}
            activeClassName="after:h-[1px] after:content-[''] after:block after:rounded-sm 
                    after:w-full after:bg-orange-400"
          >
            <Button variant="text">
              <span className=" text-xs ">CANCELED/RETURNED PRODUCT</span>
            </Button>
          </NavLink>
        </nav>
        <HR />
        <AccountSpacing />

        <section className="flex flex-nowrap overflow-hidden w-full min-w-full">
          <OnGoingDelivered orders={onGoingDeliveredOrders} />
          <CanceledReturned orders={canceledReturnedOrders} />
        </section>
      </section>
    </Suspense>
  );
};

export default Orders;
