import AccountSpacing from "@/app/(main)/components/Spacing/AccountSpacing";
import AccountHeader from "../../components/AccountHeader";
import ContactInfoFields from "@/app/(main)/(checkout)/components/ContactInfoFields";
import ShippingAddressFields from "@/app/(main)/(checkout)/components/ShippingAddressFields";
import Checkbox from "@/app/(main)/components/Inputs/Checkbox";
import Button from "@/app/(main)/components/Buttons/Button";
import BorderedOrangeButton from "@/app/(main)/components/Buttons/BorderedOrangeButton";

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
