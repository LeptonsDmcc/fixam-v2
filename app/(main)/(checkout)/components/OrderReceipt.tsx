import Heading from "@/app/components/Heading";
import HR from "@/app/components/HR";
import LabelValueDisplay from "@/app/components/LabelValueDisplay";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import OrderReceiptSummary from "./OrderReceiptSummary";
import Card from "@/app/components/Cards/Card";

const OrderReceipt = () => {
  return (
    <Card withPaddingRight>
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
        <ContentSpacing />
        <LabelValueDisplay
          label="Transaction ID"
          value="9876543210CSRCS"
          darkLabel
        />
        <ContentSpacing />
        <LabelValueDisplay
          label="Estimated Arrival Date"
          value="01-03-2024"
          darkLabel
        />
        <ContentSpacing />
        <HR />
        <OrderReceiptSummary />
        <HR />
        <ContentSpacing />
        <section>
          <LabelValueDisplay
            label="Subtotal"
            value="1,300.00"
            isCurrency
            darkLabel
          />
          <ContentSpacing />
          <LabelValueDisplay
            label="Delivery Fee"
            value="10.00"
            isCurrency
            darkLabel
          />
          <ContentSpacing />
          <LabelValueDisplay
            label="Grand Total"
            value="1,305.00"
            isCurrency
            darkLabel
            boldLabelValue
          />
        </section>
        <ContentSpacing />
      </section>
    </Card>
  );
};

export default OrderReceipt;
