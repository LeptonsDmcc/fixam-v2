import { Card } from "iconsax-react";
import OrderSummaryItem from "./OrderSummaryItem";
import { Fragment } from "react";
import Heading from "@/app/components/Heading";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import LabelValueDisplay from "@/app/components/LabelValueDisplay";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import HR from "@/app/components/HR";

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
