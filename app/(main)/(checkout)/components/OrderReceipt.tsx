import Card from "../../components/Card";
import Heading from "../../components/Heading";
import HR from "../../components/HR";
import LabelValueDisplay from "../../components/LabelValueDisplay";
import FormSpacing from "../../components/Spacing/FormSpacing";
import SectionSpacing from "../../components/Spacing/SectionSpacing";
import OrderSummaryItem from "./OrderSummaryItem";
import { Fragment } from "react";

const OrderReceipt = () => {
  return (
    <Card>
      <Heading variant="h4" styles="text-center" bold>
        Order Receipt
      </Heading>
      <SectionSpacing />
      <section>
        <LabelValueDisplay
          label="Transaction Date"
          value="22-02-2024"
          darkLabel
        />
        <FormSpacing />
        <LabelValueDisplay
          label="Transaction ID"
          value="9876543210CSRCS"
          darkLabel
        />
        <FormSpacing />
        <LabelValueDisplay
          label="Estimated Arrival Date"
          value="01-03-2024"
          darkLabel
        />
        <FormSpacing />
        <HR />
        {[1, 2, 3].map((item) => (
          <Fragment key={item}>
            <FormSpacing />
            <OrderSummaryItem isReceipt />
            <FormSpacing />
          </Fragment>
        ))}
        <HR />
        <FormSpacing />
        <section>
          <LabelValueDisplay
            label="Subtotal"
            value="1,300.00"
            isCurrency
            darkLabel
          />
          <FormSpacing />
          <LabelValueDisplay
            label="Delivery Fee"
            value="10.00"
            isCurrency
            darkLabel
          />
          <FormSpacing />
          <LabelValueDisplay
            label="Discount"
            value="-5.00"
            isCurrency
            darkLabel
          />
          <FormSpacing />
          <LabelValueDisplay
            label="Grand Total"
            value="1,305.00"
            isCurrency
            darkLabel
            boldLabelValue
          />
        </section>
        <FormSpacing />
      </section>
    </Card>
  );
};

export default OrderReceipt;
