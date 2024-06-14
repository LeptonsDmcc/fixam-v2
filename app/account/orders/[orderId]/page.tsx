import Heading from "@/app/components/Heading";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import currency from "@/app/lib/currency";
import AccountHeader from "../../components/AccountHeader";
import AccountOrderItems from "../components/AccountOrderItems";
import InfoCard from "../components/InfoCard";

const OrderDetailPage = () => {
  return (
    <section className=" text-xs">
      <AccountHeader withBackArrow>Order Detail</AccountHeader>
      <AccountSpacing />
      <p className=" text-base">Order nº 1389516282</p>
      <AccountSpacing />
      <section>
        <p>2 Items</p>
        <p>Placed on 16-04-2024</p>
        <p>Total: {currency()} 2,919</p>
      </section>
      <AccountSpacing />
      <section>
        <Heading variant="h5" bold>
          ITEMS IN YOUR ORDER
        </Heading>
        <AccountSpacing />
        <AccountOrderItems
          items={[
            { status: "canceled" },
            { status: "delivered" },
            { status: "pending" },
            { status: "delivered" },
          ]}
        />
      </section>
      <AccountSpacing />
      <section className="grid grid-cols-2">
        <InfoCard
          key={12324}
          heading="PAYMENT INFORMATION"
          infoSections={[
            {
              heading: "Payment Method",
              paragraphs: ["Pay with Cards, Bank Transfer or USSD"],
            },
            {
              heading: "Payment Details",
              paragraphs: [
                `Items total: ${currency()} 2,279`,
                `Delivery Fees: ${currency()} 640`,
                `Total: ${currency()} 2,919`,
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
                `Patrick Chimezie Chukwudifu Chukwudifu`,
                `AWKA TOWN, Anambra`,
                <a key={Math.random()} href="tel:+234 8167000077">
                  +234 8167000077
                </a>,
              ],
            },
          ]}
        />
      </section>
    </section>
  );
};

export default OrderDetailPage;
