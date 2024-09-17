import TextButtonWithIcon from "@/app/components/Buttons/TextButtonWithIcon";
import Heading from "@/app/components/Heading";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import { ROUTES } from "@/app/lib/contants";
import fetchUserAddresses from "@/app/lib/data/fetchUserAddresses";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import CustomerAddressList from "../../(checkout)/components/CustomerAddressList";

const ShippingInformation = async () => {
  const userAddresses = await fetchUserAddresses();
  const addressLength = userAddresses?.length;
  const hasAddress = addressLength && addressLength !== 0;

  return (
    <section
      className="rounded-md 
  lg:p-6"
    >
      <header>
        <Heading variant="h4" bold>
          Shipping Information
        </Heading>
      </header>
      <AccountSpacing />
      {hasAddress ? (
        <CustomerAddressList withBorder addresses={userAddresses} />
      ) : (
        <p className=" text-center">No address added</p>
      )}

      <AccountSpacing />
      {!hasAddress || addressLength < 3 ? (
        <Link
          href={`${ROUTES.account}/profile/address/new`}
          className="flex justify-end"
        >
          <TextButtonWithIcon icon={<FaPlus />}>Add Address</TextButtonWithIcon>
        </Link>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ShippingInformation;
