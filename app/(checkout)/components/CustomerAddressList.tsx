import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import CustomerAddress from "./CustomerAddress";

const CustomerAddressList = () => {
  return (
    <section>
      <CustomerAddress addressId="1" isDefault />
      <SectionSpacing />
      <CustomerAddress addressId="2" />
    </section>
  );
};

export default CustomerAddressList;
