import { cookies } from "next/headers";

const getAuthUser = async () => {
  const authToken = cookies().get("auth_access");

  const resData = await fetch(
    `${process.env.FIXAM_BASE_URL}/users/auth/user/`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      next: {
        revalidate: 1,
      },
    }
  );

  console.log("USERRRRRRRRr", resData);
  //   const user = await resData.json();

  //   return user;
};

export default getAuthUser;
