import React from "react";
import SigninLayout from "../components/SigninLayout";
import { SigninSpacing } from "../signin/page";
import Heading from "@/app/components/Heading";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import Input from "@/app/components/Inputs/Input";
import { CiLock } from "react-icons/ci";
import Checkbox from "@/app/components/Inputs/Checkbox";
import Button from "@/app/components/Buttons/Button";
import { FiPhone } from "react-icons/fi";

const SingupPage = () => {
  return (
    <SigninLayout>
      <form>
        <SigninSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Get Started</span>
          </Heading>
          <SigninSpacing />
          <p>
            Sign up to enjoy our services and get unlimited access to our
            shopping collections.
          </p>
          <SigninSpacing />
        </div>
        <Input icon={<IoPersonOutline />} placeholder="Enter First Name" />
        <SigninSpacing />
        <Input icon={<IoPersonOutline />} placeholder="Enter Last Name" />
        <SigninSpacing />
        <Input icon={<IoMailOutline />} placeholder="Enter Your Email" />
        <SigninSpacing />
        <Input icon={<FiPhone />} type="tel" placeholder="Enter Phone No." />
        <SigninSpacing />
        <Input
          icon={<CiLock />}
          type="password"
          placeholder="Enter Your Password"
        />
        <SigninSpacing />
        <Input
          icon={<CiLock />}
          type="confirmPassword"
          placeholder="Confirm Your Password"
        />
        <SigninSpacing />
        <div className="flex items-center gap-1">
          <Checkbox small /> <span>Remember Password</span>
        </div>
        <SigninSpacing />
        <Button full>Sign In</Button>
        <SigninSpacing />
        <div className=" text-center">
          Already have an account?{" "}
          <Button variant="text" elementType="link" href="/auth/signin">
            Login
          </Button>
        </div>
      </form>
    </SigninLayout>
  );
};

export default SingupPage;
