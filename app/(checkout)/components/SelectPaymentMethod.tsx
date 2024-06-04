import RadioInput from "@/app/components/Inputs/RadioInput";

const SelectPaymentMethod = () => {
  return (
    <div className="flex items-center gap-12">
      <RadioInput htmlFor="payWithCard" text="Pay with Card" defaultChecked />
      <RadioInput htmlFor="payOnDelivery" text="Pay on Delivery" />
    </div>
  );
};

export default SelectPaymentMethod;
