import getAuthUser from "@/app/lib/data/user";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";

const AppHeader = async () => {
  const user = await getAuthUser();

  return (
    <>
      <HeaderTop name={user?.first_name} />
      <HeaderMain isAuthenticated={user !== null} />
    </>
  );
};

export default AppHeader;
