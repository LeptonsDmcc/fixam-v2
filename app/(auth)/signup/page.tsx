"use client";

import { signupAction } from "@/actions/auth";
import { useFormState } from "react-dom";
import { IoMailOutline } from "react-icons/io5";
import SigninLayout from "../components/SigninLayout";
import SubmitAuth from "./SubmitAuth";
import FormSpacing from "@/app/(main)/components/Spacing/FormSpacing";
import Heading from "@/app/(main)/components/Heading";
import FormInput from "@/app/(main)/components/Inputs/FormInput";
import Input from "@/app/(main)/components/Inputs/Input";
import PerfectCenter from "@/app/(main)/components/PerfectCenter";
import Button from "@/app/(main)/components/Buttons/Button";

const SingupPage = () => {
  const [state, formSignupAction] = useFormState(signupAction, {
    message: "",
    hasError: false,
  });

  return (
    <SigninLayout>
      <form action={formSignupAction}>
        <FormSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Get Started</span>
          </Heading>
          <FormSpacing />
          <p>
            Sign up to enjoy our services and get unlimited access to our
            shopping collections.
          </p>
          <FormSpacing />
        </div>
        <FormInput
          name="first_name"
          variant="name"
          placeholder="Enter First Name"
        />
        <FormSpacing />
        <FormInput
          name="last_name"
          variant="name"
          placeholder="Enter Last Name"
        />
        <FormSpacing />
        <Input
          name="email"
          icon={<IoMailOutline />}
          placeholder="Enter Your Email"
        />
        <FormSpacing />
        <FormInput name="phone" variant="phone" />
        <FormSpacing />
        <FormInput
          name="password1"
          placeholder="Enter Your Password"
          variant="password"
        />
        <FormSpacing />
        <FormInput
          name="password2"
          placeholder="Confirm Your Password"
          variant="password"
        />
        <FormSpacing />
        {/* <div className="flex items-center gap-1">
          <Checkbox htmlFor="rememberPassword" small />
          <span>Remember Password</span>
        </div> */}
        <FormSpacing />
        <p className="text-red-400">{state.hasError && state.message}</p>
        <FormSpacing />
        <SubmitAuth>Sign In</SubmitAuth>
        <FormSpacing />
        <PerfectCenter>
          Already have an account?
          <Button variant="text" elementType="link" href="/signin">
            Login
          </Button>
        </PerfectCenter>

        {/* </div> */}
      </form>
    </SigninLayout>
  );
};

export default SingupPage;
