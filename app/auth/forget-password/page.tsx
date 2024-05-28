import React from "react";
import SigninLayout from "../components/SigninLayout";
import Button from "@/app/components/Buttons/Button";
import { SigninSpacing } from "../signin/page";
import Heading from "@/app/components/Heading";
import { IoMailOutline } from "react-icons/io5";
import Input from "@/app/components/Inputs/Input";

const ResetPasswordPage = () => {
  return (
    <SigninLayout>
      <form>
        <SigninSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Forgot Password</span>
          </Heading>
          <SigninSpacing />
          <p>Kindly enter your email address linked to your account</p>
          <SigninSpacing />
        </div>
        <Input
          icon={<IoMailOutline />}
          placeholder="Enter Your Email Address or Phone Number"
        />
        <SigninSpacing />

        <Button full>Submit</Button>
      </form>
    </SigninLayout>
  );
};

export default ResetPasswordPage;
