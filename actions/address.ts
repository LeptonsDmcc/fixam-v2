"use server";

import getAuthUser from "@/app/lib/data/user";
import { deleteData, postData, putData } from "@/app/lib/services/apiClient";
import { AddressType } from "@/app/lib/types";
import Joi from "joi";
import { redirect } from "next/navigation";
import { ActionErrorType } from "./error-type";
import { revalidatePath } from "next/cache";
import { ROUTES } from "@/app/lib/contants";

export const addAddressAction = async (
  prevState: ActionErrorType,
  formData: FormData
) => {
  // If this value is available then the user wants to edit
  const editId = formData.get("editId");
  const isCheckingout = formData.get("isCheckingout");

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

  // The user is adding a new address at checkout point
  if (isCheckingout) {
    revalidatePath(ROUTES.profile);
    return {
      hasError: false,
      message: "Address Updated successfully!",
    };
  }

  redirect("/account/profile");
};

export const deleteAddressAction = async (
  prevState: ActionErrorType,
  formData: FormData
) => {
  const addressId = formData.get("addressId");
  if (addressId) {
    try {
      await deleteData(`users/adresses/${addressId}`);
      revalidatePath(ROUTES.profile);
      return {
        message: "Address deleted",
        hasError: false,
      };
    } catch (error) {
      console.log("ERROR DELETING ADDRESS", error);
      revalidatePath(ROUTES.profile);
      return {
        message: "Address deleted",
        hasError: true,
      };
    }
  }

  return {
    message: "No address provided for deletion",
    hasError: true,
  };
};
