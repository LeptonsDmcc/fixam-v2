import getAuthUser from "./user";

const isAuthenticated = async () => {
  const isAuth = (await getAuthUser()) !== null;
  return isAuth;
};

export default isAuthenticated;
