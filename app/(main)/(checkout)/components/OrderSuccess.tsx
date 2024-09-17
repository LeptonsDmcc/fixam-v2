import Heading from "@/app/components/Heading";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Link from "next/link";
import OrderReceipt from "./OrderReceipt";
import Button from "@/app/components/Buttons/Button";
import BorderedOrangeButton from "@/app/components/Buttons/BorderedOrangeButton";

const OrderSuccess = () => {
  return (
    <section
      className="m-auto
      lg:w-[70%]"
    >
      <SectionSpacing />
      <header
        className=" text-center 
        lg:px-4"
      >
        <Heading variant="h4" bold>
          Thanks for your Order!
        </Heading>

        <p className="my-2">
          Your order confirmation and receipt has been sent to
          chibuzoezeh@yahoo.com
        </p>
      </header>
      <ContentSpacing />
      <OrderReceipt />
      <ContentSpacing />
      <div
        className="m-auto
        lg:w-[80%]"
      >
        <Button full>Continue Shopping</Button>
        <ContentSpacing />
        <Link href="/order/track">
          <BorderedOrangeButton full>Track Order</BorderedOrangeButton>
        </Link>
      </div>
      <SectionSpacing />
    </section>
  );
};

export default OrderSuccess;
