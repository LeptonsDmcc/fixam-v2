import Card from "@/app/components/Card";
import Heading from "@/app/components/Heading";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import { MdOutlineAccountCircle } from "react-icons/md";
import AccountHeader from "../components/AccountHeader";

const ProfilePage = () => {
  return (
    <Card elementType="section">
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
      <section className=" border rounded-md p-6">
        <header>
          <Heading variant="h4" bold>
            Shipping Information
          </Heading>
        </header>
      </section>
    </Card>
  );
};

export default ProfilePage;
