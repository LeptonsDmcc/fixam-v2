"use client";

import { signinAction } from "@/actions/auth";
import { useFormState } from "react-dom";
import SigninLayout from "../components/SigninLayout";
import SubmitAuth from "../signup/SubmitAuth";
import FormSpacing from "@/app/(main)/components/Spacing/FormSpacing";
import Heading from "@/app/(main)/components/Heading";
import FormInput from "@/app/(main)/components/Inputs/FormInput";
import Checkbox from "@/app/(main)/components/Inputs/Checkbox";
import Button from "@/app/(main)/components/Buttons/Button";

const SigninPage = () => {
  const [state, formSigninAction] = useFormState(signinAction, {
    hasError: false,
    message: "",
  });

  return (
    <SigninLayout>
      <form action={formSigninAction}>
        <FormSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Login</span>
          </Heading>
          <FormSpacing />
          <p>
            Sign in to enjoy our services and get unlimited access to our
            shopping collections.
          </p>
          <FormSpacing />
        </div>
        <FormInput variant="email" name="email" />
        <FormSpacing />
        <FormInput
          placeholder="Enter Your Password"
          variant="password"
          name="password"
        />
        {state.hasError && (
          <p className=" text-red-400 my-2">{state.message}</p>
        )}
        <FormSpacing />
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <Checkbox htmlFor="staySignIn" small /> <span>Stay signed in</span>
          </div>
          <Button variant="text" elementType="link" href="/forget-password">
            Forgot Password?
          </Button>
        </div>
        <FormSpacing />
        <SubmitAuth full>Sign In</SubmitAuth>
        <FormSpacing />
        <div className=" text-center">
          Don't have an account?{" "}
          <Button variant="text" elementType="link" href="/signup">
            Register
          </Button>
        </div>
      </form>
    </SigninLayout>
  );
};

export default SigninPage;
