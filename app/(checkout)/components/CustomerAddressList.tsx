import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import CustomerAddress from "./CustomerAddress";

interface Props {
  isInAccount?: boolean;
}

const CustomerAddressList = ({ isInAccount }: Props) => {
  return (
    <section>
      <CustomerAddress addressId="1" isDefault withBorder={isInAccount} />
      <SectionSpacing />
      <CustomerAddress addressId="2" withBorder={isInAccount} />
    </section>
  );
};

export default CustomerAddressList;
