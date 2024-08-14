"use server";

import formatNigeriaNumber from "@/app/lib/formatNigeriaNumber";
import Joi from "joi";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type AuthActionState = {
  message: string;
  hasError: boolean;
};

export const signupAction = async (
  prevState: AuthActionState,
  formData: FormData
) => {
  const data = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    phone: formatNigeriaNumber(formData.get("phone") || ""),
    password1: formData.get("password1"),
    password2: formData.get("password2"),
  };

  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email(),
    phone: Joi.string().required(),
    password1: Joi.string().min(8).required().messages({
      "string.min": '"password" length must be at least 8 characters long',
      "any.required": '"password" is not allowed to be empty',
    }),
    password2: Joi.string().valid(Joi.ref("password1")).required().messages({
      "any.only": "password confirmation does not match password",
    }),
  });

  const { error, value } = schema.validate(data);

  if (error) {
    console.log("ERROR", error);
    return {
      message: error.message,
      hasError: true,
    };
  }

  try {
    //  Send request to save user
    await fetch(`${process.env.FIXAM_BASE_URL}/users/auth/register/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(value),
    });
  } catch (error) {
    console.log("ERROR SAVING USER", error);
    return {
      message: "Something went wrong",
      hasError: true,
    };
  }
  redirect(`/verify/?e=${value.email}`);
};

// Signin form action
export const signinAction = async (
  prevState: AuthActionState,
  formData: FormData
) => {
  const data = {
    email: formData.get("email"),
    // phone: formatNigeriaNumber(formData.get("phone") || ""),
    password: formData.get("password"),
  };

  try {
    //  Send request to save user
    const signinRes = await fetch(
      `${process.env.FIXAM_BASE_URL}/users/auth/login/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    console.log("signinRes", signinRes);
    if (signinRes.status == 400)
      return {
        hasError: true,
        message: "Incorrect Email or Password",
      };

    const userData = await signinRes.json();
    cookies().set("auth_access", userData.access);
    cookies().set("refresh", userData.refresh);
    // console.log("userData", userData);
  } catch (error) {
    console.log("ERROR SAVING USER", error);
    return {
      message: "Something went wrong",
      hasError: true,
    };
  }

  redirect(`/?message=lok`);
};

// Verify Action
export const verifyAction = async (
  prevState: AuthActionState,
  formData: FormData
) => {
  const data = {
    otp: parseInt(
      formData.get("otp_code")?.toString().split(",").join("") || "0"
    ),
  };

  const schema = Joi.object({
    otp: Joi.number().required(),
  });

  const { error, value } = schema.validate(data);

  if (error) {
    console.log("ERROR", error);
    return {
      message: error.message,
      hasError: true,
    };
  }

  try {
    //  Send request to save user
    const res = await fetch(
      `${process.env.FIXAM_BASE_URL}/users/auth/verify/account/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(value),
      }
    );

    console.log("resData", res.status, res.statusText, res.ok);

    if (!res.ok) {
      return {
        message: "OTP entered is invalid :(",
        hasError: true,
      };
    }
  } catch (error) {
    console.log("ERROR VERFIFYING USER", error);
    return {
      message: "Something went wrong",
      hasError: true,
    };
  }

  redirect(`/?message=vok`);
  // return {
  //   hasError: false,
  //   message: "Your account has been verified successfully :)",
  // };
};

// resendOTPAction
type ResendOTPType = {
  email?: string;
  phone?: string;
  purpose?:
    | "PasswordReset"
    | "EmailVerification"
    | "PhoneVerification"
    | "AccountVerification";
};

export const resendOTPAction = async (data: ResendOTPType) => {
  const resendData: ResendOTPType = {
    purpose: data.purpose || "AccountVerification",
  };

  if (data.email) {
    resendData.email = data.email;
  }

  if (data.phone) {
    resendData.phone = data.phone;
  }

  if (data.email || data.phone) {
    const resendOTPRes = await fetch(
      `${process.env.FIXAM_BASE_URL}/users/auth/resend_otp/`,
      {
        method: "POST",
        body: JSON.stringify(resendData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resendOTPJsonRes = await resendOTPRes.json();
    console.log("resendOTPJsonRes", resendOTPJsonRes);
    if (resendOTPJsonRes.detail != "ok")
      return {
        hasError: true,
        message: resendOTPJsonRes.detail,
      };
  }

  // return {
  //   hasError: false,
  //   message: "Check you email for new OTP",
  // };

  let searchParams = "?";

  if (data.email) {
    searchParams += `e=${data.email}`;
  }

  redirect(`/verify${searchParams}`);

  // console.log("RESENDING OTP TO: ", email);
};

// {
//     "non_field_errors": [
//       "Account is not verified."
//     ]
//   }
