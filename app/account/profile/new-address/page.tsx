import Heading from "@/app/components/Heading";
import AccountHeader from "../../components/AccountHeader";
import ShippingAddressFields from "@/app/(checkout)/components/ShippingAddressFields";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import ContactInfoFields from "@/app/(checkout)/components/ContactInfoFields";
import Checkbox from "@/app/components/Inputs/Checkbox";
import Button from "@/app/components/Buttons/Button";
import BorderedOrangeButton from "@/app/components/Buttons/BorderedOrangeButton";

const page = () => {
  return (
    <>
      <AccountHeader withBack />
      <AccountSpacing />
      <section className=" w-[513px] m-auto">
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
