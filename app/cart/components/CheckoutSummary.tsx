import AmountDisplay from "@/app/components/AmountDisplay";
import Button from "@/app/components/Buttons/Button";
import Card from "@/app/components/Card";
import HR from "@/app/components/HR";
import Space from "@/app/components/Space";

const CheckoutSummary = () => {
  return (
    <Card>
      <div className=" py-8 px-6">
        <AmountDisplay label="Subtotal" amount={1234} />
        <Space spacing="my-6" />
        <AmountDisplay label="Delivery Fee" amount={10} />
        <Space spacing="my-6" />

        <AmountDisplay label="Discount" amount={-5.0} />
        <Space spacing="my-6" />
        <AmountDisplay label="Promo Offer" amount={0.0} />
        <Space spacing="my-6" />
        <HR />
        <Space spacing="my-6" />
        <AmountDisplay label="Grand Total" amount={1_305.0} darkLabel />
        <Space spacing="my-6" />
        <HR />
        <Space spacing="my-6" />
        <Button full>Checkout(₦1,305.00)</Button>
      </div>
    </Card>
  );
};

export default CheckoutSummary;
