import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import AccountHeader from "../components/AccountHeader";
import AccountSpacing from "../../components/Spacing/AccountSpacing";
import Heading from "../../components/Heading";
import CustomerAddressList from "../../(checkout)/components/CustomerAddressList";
import { ROUTES } from "@/app/lib/contants";
import TextButtonWithIcon from "../../components/Buttons/TextButtonWithIcon";

const ProfilePage = () => {
  return (
    <>
      <AccountHeader>My Profile</AccountHeader>
      <AccountSpacing />
      <section className="flex items-center gap-4">
        <MdOutlineAccountCircle size={58} />
        <div>
          <Heading variant="h5">Patrick Chukwudifu</Heading>
          <p className="text-xs">patrickchukwudifu716@gmail.com</p>
        </div>
      </section>
      <AccountSpacing />
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
        <CustomerAddressList isInAccount />
        <AccountSpacing />
        <Link
          href={`${ROUTES.account}/profile/new-address`}
          className="flex justify-end"
        >
          <TextButtonWithIcon icon={<FaPlus />}>Add Address</TextButtonWithIcon>
        </Link>
      </section>
    </>
  );
};

export default ProfilePage;
