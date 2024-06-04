import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import Checkbox from "@/app/components/Inputs/Checkbox";
import FormInput from "@/app/components/Inputs/FormInput";
import Input from "@/app/components/Inputs/Input";
import { IoMailOutline } from "react-icons/io5";
import SigninLayout from "../components/SigninLayout";
import FormSpacing from "@/app/components/Spacing/FormSpacing";

const SingupPage = () => {
  return (
    <SigninLayout>
      <form>
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
        <FormInput variant="name" placeholder="Enter First Name" />
        <FormSpacing />
        <FormInput variant="name" placeholder="Enter Last Name" />
        <FormSpacing />
        <Input icon={<IoMailOutline />} placeholder="Enter Your Email" />
        <FormSpacing />
        <FormInput variant="phone" />
        <FormSpacing />
        <FormInput placeholder="Enter Your Password" variant="password" />
        <FormSpacing />
        <FormInput placeholder="Confirm Your Password" variant="password" />
        <FormSpacing />
        <div className="flex items-center gap-1">
          <Checkbox htmlFor="rememberPassword" small />{" "}
          <span>Remember Password</span>
        </div>
        <FormSpacing />
        <Button full>Sign In</Button>
        <FormSpacing />
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
