import { cookies } from "next/headers";
import { UserType } from "../types";

const getAuthUser = async (): Promise<UserType> => {
  // Get access token from cookie
  const authAccessToken = getAuthToken();

  // If there is no access token then user is not logged in
  if (!authAccessToken) {
    return null;
  }

  // Get the value from atuhAccessToken
  const authAccessTokenValue = authAccessToken;

  try {
    // Use the access token value to get the current logged in user
    const resData = await fetch(
      `${process.env.FIXAM_BASE_URL}/users/auth/user/`,
      {
        headers: {
          Authorization: `Bearer ${authAccessTokenValue}`,
        },
        next: {
          revalidate: 10,
        },
      }
    );

    // Parse user data
    let user = await resData.json();

    // Check for access token validity
    if (user.code == "token_not_valid") {
      // If not valid - Get refresh token
      const authRefreshToken = cookies().get("auth_refresh");

      // If there is no refresh token then user is not logged in
      if (!authRefreshToken) {
        return null;
      }

      // Get the value from authRefreshToken
      const authRefreshTokenValue = authRefreshToken.value;

      // Use referesh token to generate new access and refresh tokens
      const newTokens = await fetch(
        `${process.env.FIXAM_BASE_URL}/users/auth/token/refresh/`,
        {
          body: JSON.stringify({ refresh: authRefreshTokenValue }),
        }
      );

      const newTokensData = await newTokens.json();

      // Check for refresh token validity
      if (newTokensData.code == "token_not_valid") {
        // If not valid - User needs to re-signin
        return null;
      }

      // nextjs might throw an error when setting cookies like this
      try {
        // save newTokens to cookies
        cookies().set("auth_access", newTokensData.access);
        cookies().set("auth_refresh", newTokensData.refresh);
      } catch (error) {}

      // Use the new access token to get the current logged in user
      const resData = await fetch(
        `${process.env.FIXAM_BASE_URL}/users/auth/user/`,
        {
          headers: {
            Authorization: `Bearer ${newTokensData.access}`,
          },
          next: {
            revalidate: 10,
          },
        }
      );

      // Re-assign user using the new generated access token
      user = await resData.json();
    }
    return user;
  } catch (error) {
    console.log("ERROR FETCHING LOGGED IN USER", error);
    return null;
  }
};

export const getAuthToken = () => {
  const authToken = cookies().get("auth_access");
  if (!authToken) {
    return null;
  }
  return authToken.value;
};

export default getAuthUser;
