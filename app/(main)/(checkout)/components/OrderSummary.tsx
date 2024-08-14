import Button from "../../components/Buttons/Button";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import HR from "../../components/HR";
import LabelValueDisplay from "../../components/LabelValueDisplay";
import FormSpacing from "../../components/Spacing/FormSpacing";
import SectionSpacing from "../../components/Spacing/SectionSpacing";
import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = () => {
  return (
    <>
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
                <LabelValueDisplay
                  label="Subtotal"
                  value="1,300.0"
                  isCurrency
                />
                <FormSpacing />
                <LabelValueDisplay label="Delivery Fee" value="10.0" />
              </div>
              <FormSpacing />
              <HR />
              <FormSpacing />
              <LabelValueDisplay
                label="Grand Total"
                value="1,305.0"
                darkLabel
                isCurrency
              />
            </div>
          </section>
        </section>
      </Card>
      <SectionSpacing />
      <div className="w-[80%] m-auto">
        <Button full>Proceed to Payment</Button>
      </div>
    </>
  );
};

export default OrderSummary;
