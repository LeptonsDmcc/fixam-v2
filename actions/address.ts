"use server";

import getAuthUser from "@/app/lib/data/user";
import { postData, putData } from "@/app/lib/services/apiClient";
import { AddressType } from "@/app/lib/types";
import Joi from "joi";
import { redirect } from "next/navigation";
import { ActionErrorType } from "./error-type";

export const addAddressAction = async (
  prevState: ActionErrorType,
  formData: FormData
) => {
  // If this field is available then the user wants to edit
  const editId = formData.get("editId");

  console.log("editId", editId);
  const data = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    phone_one: formData.get("phone"),
    street_address: formData.get("street_address"),
    city: formData.get("city"),
    state: formData.get("state"),
    zip_code: formData.get("zipcode"),
    is_default: formData.get("is_default") ? true : false,
    country: "NGN",
    email: formData.get("email"),
  };

  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone_one: Joi.string().required(),
    street_address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip_code: Joi.string().required(),
    is_default: Joi.bool().required(),
    country: Joi.string().required(),
    email: Joi.string().email(),
  });

  const { error, value } = schema.validate(data);

  if (error) {
    return {
      message: error.message,
      hasError: true,
    };
  }

  const user = await getAuthUser();

  if (editId) {
    const res = await putData<AddressType, AddressType>(
      `users/adresses/${editId}`,
      {
        ...value,
        user: user!.id,
      }
    );

    if (res == undefined)
      return {
        hasError: true,
        message: "Something went wrong",
      };
  } else {
    const res = await postData<AddressType, AddressType>("users/adresses", {
      ...value,
      user: user!.id,
    });

    if (res == undefined)
      return {
        hasError: true,
        message: "Something went wrong",
      };
  }

  redirect("/account/profile");
};
