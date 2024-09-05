import { ROUTES } from "@/app/lib/contants";
import fetchAll from "@/app/lib/data/fetchAll";
import { AddressType, UserType } from "@/app/lib/types";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import CustomerAddressList from "../../(checkout)/components/CustomerAddressList";
import TextButtonWithIcon from "@/app/components/Buttons/TextButtonWithIcon";
import Heading from "@/app/components/Heading";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";

interface Props {
  user: UserType;
}
const ShippingInformation = async ({ user }: Props) => {
  const userAddresses = await fetchAll<AddressType[]>(
    `users/${user!.id}/addresses`,
    {
      withAuth: true,
    }
  );

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
      {userAddresses?.length ? (
        <CustomerAddressList isInAccount addresses={userAddresses} />
      ) : (
        <p className=" text-center">No address added</p>
      )}

      <AccountSpacing />
      <Link
        href={`${ROUTES.account}/profile/address/new`}
        className="flex justify-end"
      >
        <TextButtonWithIcon icon={<FaPlus />}>Add Address</TextButtonWithIcon>
      </Link>
    </section>
  );
};

export default ShippingInformation;
