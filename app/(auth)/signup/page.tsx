"use client";

import { signupAction } from "@/actions/auth";
import { useFormState } from "react-dom";
import { IoMailOutline } from "react-icons/io5";
import SigninLayout from "../components/SigninLayout";
import SubmitForm from "../../components/Buttons/SubmitForm";
import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import FormInput from "@/app/components/Inputs/FormInput";
import PerfectCenter from "@/app/components/PerfectCenter";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import Input from "@/app/components/Inputs/Input";

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
        <SubmitForm>Sign In</SubmitForm>
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
