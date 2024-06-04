import Card from "@/app/components/Card";
import Heading from "@/app/components/Heading";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import OrderSummaryItem from "./OrderSummaryItem";
import HR from "@/app/components/HR";
import AmountDisplay from "@/app/components/AmountDisplay";

const OrderSummary = () => {
  return (
    <Card>
      <section className="py-6">
        <Heading variant="h4">
          <div className="font-semibold text-center">Your Order</div>
        </Heading>
        <FormSpacing />
        <section className="p-6 overflow-y-auto has-scrollbar">
          <OrderSummaryItem />
          <FormSpacing />
          <OrderSummaryItem />
          <FormSpacing />
          <OrderSummaryItem />
          <div>
            <FormSpacing />
            <HR />
            <FormSpacing />
            <div>
              <AmountDisplay label="Subtotal" amount={1_300.0} />
              <FormSpacing />
              <AmountDisplay label="Delivery Fee" amount={10.0} />
            </div>
            <FormSpacing />
            <HR />
            <FormSpacing />
            <AmountDisplay label="Grand Total" amount={1_305.0} darkLabel />
          </div>
        </section>
      </section>
    </Card>
  );
};

export default OrderSummary;
