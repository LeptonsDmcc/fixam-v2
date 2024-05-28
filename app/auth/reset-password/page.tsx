import React from "react";
import SigninLayout from "../components/SigninLayout";
import { SigninSpacing } from "../signin/page";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/Buttons/Button";
import Input from "@/app/components/Inputs/Input";
import { CiLock } from "react-icons/ci";

const ForgetPasswordPage = () => {
  return (
    <SigninLayout>
      <form>
        <SigninSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Reset Password</span>
          </Heading>
          <SigninSpacing />
          <p>
            Create a new password for your account. Please enter your new
            password and confirm it to ensure accuracy.
          </p>
          <SigninSpacing />
        </div>
        <Input
          icon={<CiLock />}
          type="password"
          placeholder="Enter Your New Password"
        />
        <SigninSpacing />
        <Input
          icon={<CiLock />}
          type="confirmPassword"
          placeholder="Confirm Your New Password"
        />
        <SigninSpacing />

        <Button full>Submit</Button>
      </form>
    </SigninLayout>
  );
};

export default ForgetPasswordPage;
