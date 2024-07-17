import ContactInfoFields from "@/app/(checkout)/components/ContactInfoFields";
import ShippingAddressFields from "@/app/(checkout)/components/ShippingAddressFields";
import BorderedOrangeButton from "@/app/components/Buttons/BorderedOrangeButton";
import Button from "@/app/components/Buttons/Button";
import Checkbox from "@/app/components/Inputs/Checkbox";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import AccountHeader from "../../components/AccountHeader";

const page = () => {
  return (
    <>
      <AccountHeader withBack />
      <AccountSpacing />
      <section
        className=" m-auto
      lg:w-[513px]"
      >
        <ContactInfoFields />
        <AccountSpacing />
        <ShippingAddressFields shippingOnly />
        <AccountSpacing />
        <div className="flex gap-3 items-center">
          <Checkbox htmlFor="shipToAnotherAddress" small />
          <p className=" text-orange-400">Set as default address</p>
        </div>
        <AccountSpacing />
        <div className="flex gap-3">
          <Button full>Save</Button>
          <BorderedOrangeButton full>Cancel</BorderedOrangeButton>
        </div>
        <AccountSpacing />
      </section>
    </>
  );
};

export default page;
