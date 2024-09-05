import getAuthUser from "@/app/lib/data/user";
import AccountHeader from "../components/AccountHeader";
import ShippingInformation from "./ShippingInformation";
import UserInformation from "./UserInformation";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";

const ProfilePage = async () => {
  const user = await getAuthUser();
  return (
    <>
      <AccountHeader>My Profile</AccountHeader>
      <AccountSpacing />
      <UserInformation user={user} />
      <AccountSpacing />
      <ShippingInformation user={user} />
    </>
  );
};

export default ProfilePage;
