import { cancelOrderAction } from "@/actions/order";
import CopyButton from "@/app/components/Buttons/CopyButton";
import SubmitForm from "@/app/components/Buttons/SubmitForm";
import Heading from "@/app/components/Heading";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import fetchAll from "@/app/lib/data/fetchAll";
import { formatPrice } from "@/app/lib/number-formatter";
import truncateOrderId from "@/app/lib/truncateOrderId";
import { OrderType } from "@/app/lib/types";
import AccountHeader from "../../components/AccountHeader";
import AccountOrderItems from "../components/AccountOrderItems";
import InfoCard from "../components/InfoCard";

interface Props {
  params: { orderId: string };
}

const OrderDetailPage = async ({ params: { orderId } }: Readonly<Props>) => {
  const order = await fetchAll<OrderType>(`orders/${orderId}`, {
    withAuth: true,
  });

  return (
    <section className=" lg:text-xs">
      <AccountHeader withBackArrow>Order Detail</AccountHeader>
      <AccountSpacing />
      <p className=" text-base flex gap-2">
        Order nº{" "}
        <CopyButton orderId={orderId}>{truncateOrderId(orderId)}...</CopyButton>
      </p>
      <AccountSpacing />
      <section>
        <p>{order?.order_items.length} Items</p>
        <p>Placed on 16-04-2024</p>
        <p>Total: {formatPrice(order?.order_total_price || 0)}</p>
      </section>
      <AccountSpacing />
      <section>
        <Heading variant="h5" bold>
          ITEMS IN YOUR ORDER
        </Heading>
        <AccountSpacing />
        <AccountOrderItems
          orderItems={order!.order_items}
          status={order?.order_delivery_status!}
          isCanceled={order?.is_order_cancelled!}
        />
      </section>
      <AccountSpacing />
      <section
        className="grid 
        lg:grid-cols-2"
      >
        <InfoCard
          key={12324}
          heading="PAYMENT INFORMATION"
          infoSections={[
            {
              heading: "Payment Method",
              paragraphs: [order!.order_payment_method],
            },
            {
              heading: "Payment Details",
              paragraphs: [
                `Items total: ${formatPrice(order?.order_total_price || 0)}`,
                `Delivery Fees: ${formatPrice(order?.shipping_cost || 0)}`,
                `Total: ${formatPrice(order?.order_total_price || 0)}`,
              ],
            },
          ]}
        />
        <InfoCard
          key={23443}
          heading="DELIVERY INFORMATION"
          infoSections={[
            {
              heading: "Delivery Address",
              paragraphs: [
                order?.delivery_address?.first_name +
                  " " +
                  order?.delivery_address?.last_name,
                order?.delivery_address?.city +
                  ", " +
                  order?.delivery_address?.state +
                  ", " +
                  order?.delivery_address?.country,
                <a key={Math.random()} href="tel:+234 8167000077">
                  {order?.delivery_address?.phone_one}
                </a>,
              ],
            },
          ]}
        />
      </section>
      {!order?.is_order_cancelled && (
        <form
          action={cancelOrderAction.bind(null, order?.id || "")}
          className="flex justify-end"
        >
          <SubmitForm color="red" full={false}>
            Cancel
          </SubmitForm>
        </form>
      )}
    </section>
  );
};

export default OrderDetailPage;
