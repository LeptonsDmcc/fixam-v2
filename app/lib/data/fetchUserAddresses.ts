import React from "react";
import getAuthUser from "./user";
import fetchAll from "./fetchAll";
import { AddressType } from "../types";

const fetchUserAddresses = async () => {
  const user = await getAuthUser();
  let userAddresses = undefined;
  if (user) {
    userAddresses = await fetchAll<AddressType[]>(
      `users/${user!.id}/addresses`,
      {
        withAuth: true,
      }
    );
  }
  return userAddresses;
};

export default fetchUserAddresses;
