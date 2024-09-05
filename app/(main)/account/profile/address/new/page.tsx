import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import AccountHeader from "../../../components/AccountHeader";
import AddressForm from "../AddressForm";

const NewAddressPage = () => {
  return (
    <>
      <AccountHeader withBack />
      <AccountSpacing />
      <section
        className="m-auto
        lg:w-[513px]"
      >
        <AddressForm />
        <AccountSpacing />
      </section>
    </>
  );
};

export default NewAddressPage;
