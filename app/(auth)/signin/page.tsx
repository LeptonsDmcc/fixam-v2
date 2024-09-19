"use client";

import { signinAction } from "@/actions/auth";
import { useFormState } from "react-dom";
import SigninLayout from "../components/SigninLayout";
import SubmitForm from "../../components/Buttons/SubmitForm";
import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import Checkbox from "@/app/components/Inputs/Checkbox";
import FormInput from "@/app/components/Inputs/FormInput";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import { useSearchParams } from "next/navigation";
import HiddenInput from "@/app/components/Inputs/HiddenInput";

const SigninPage = () => {
  const [state, formSigninAction] = useFormState(signinAction, {
    hasError: false,
    message: "",
  });

  const searchParams = useSearchParams();

  return (
    <SigninLayout>
      <form action={formSigninAction}>
        <HiddenInput name="redirectTo" value={searchParams.get("to") || ""} />
        <ContentSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Login</span>
          </Heading>
          <ContentSpacing />
          <p>
            Sign in to enjoy our services and get unlimited access to our
            shopping collections.
          </p>
          <ContentSpacing />
        </div>
        <FormInput variant="email" name="email" />
        <ContentSpacing />
        <FormInput
          placeholder="Enter Your Password"
          variant="password"
          name="password"
        />
        {state.hasError && (
          <p className=" text-red-400 my-2">{state.message}</p>
        )}
        <ContentSpacing />
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <Checkbox htmlFor="staySignIn" small /> <span>Stay signed in</span>
          </div>
          <Button variant="text" elementType="link" href="/forget-password">
            Forgot Password?
          </Button>
        </div>
        <ContentSpacing />
        <SubmitForm full>Sign In</SubmitForm>
        <ContentSpacing />
        <div className=" text-center">
          Don&apos;t have an account?{" "}
          <Button variant="text" elementType="link" href="/signup">
            Register
          </Button>
        </div>
      </form>
    </SigninLayout>
  );
};

export default SigninPage;
