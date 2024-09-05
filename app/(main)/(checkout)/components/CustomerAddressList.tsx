import { AddressType, UserType } from "@/app/lib/types";
import CustomerAddress from "./CustomerAddress";

interface Props {
  isInAccount?: boolean;
  addresses: AddressType[];
}

const CustomerAddressList = ({ isInAccount, addresses }: Props) => {
  return (
    <section>
      {addresses.map((address) => (
        <div key={address.id} className="my-6 md:my-12">
          <CustomerAddress address={address} withBorder={isInAccount} />
        </div>
      ))}
    </section>
  );
};

export default CustomerAddressList;
