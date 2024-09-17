import fetchAll from "@/app/lib/data/fetchAll";
import { OrderType } from "@/app/lib/types";
import Orders from "./Orders";

const OrderPage = async () => {
  const orders: OrderType[] | undefined = await fetchAll<OrderType[]>(
    `orders`,
    {
      withAuth: true,
    }
  );

  return (
    <>
      <Orders orders={orders || []} />
    </>
  );
};

export default OrderPage;
