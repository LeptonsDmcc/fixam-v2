import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import OrderReceipt from "./OrderReceipt";
import Heading from "@/app/components/Heading";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import Button from "@/app/components/Buttons/Button";
import BorderedOrangeButton from "@/app/components/Buttons/BorderedOrangeButton";

const OrderSuccess = () => {
  return (
    <section className="w-[70%] m-auto">
      <SectionSpacing />
      <header className=" text-center px-4">
        <Heading variant="h4" bold>
          Thanks for your Order!
        </Heading>
        <p>
          Your order confirmation and receipt has been sent to
          chibuzoezeh@yahoo.com
        </p>
      </header>
      <FormSpacing />
      <OrderReceipt />
      <FormSpacing />
      <div className=" w-[80%] m-auto">
        <Button full>Continue Shopping</Button>
        <FormSpacing />
        <BorderedOrangeButton full>Track Order</BorderedOrangeButton>
      </div>
      <SectionSpacing />
    </section>
  );
};

export default OrderSuccess;
