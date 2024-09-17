import RadioInput from "@/app/components/Inputs/RadioInput";

const SelectPaymentMethod = () => {
  return (
    <div className="flex items-center gap-12">
      <RadioInput
        htmlFor="CardPayment"
        value="CardPayment"
        name="paymentMethod"
        text="Pay with Card"
        defaultChecked
      />
      <RadioInput
        htmlFor="PayOnDelivery"
        value="PayOnDelivery"
        name="paymentMethod"
        text="Pay on Delivery"
      />
    </div>
  );
};

export default SelectPaymentMethod;
