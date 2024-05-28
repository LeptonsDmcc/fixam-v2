import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import Checkbox from "@/app/components/Inputs/Checkbox";
import Input from "@/app/components/Inputs/Input";
import Space from "@/app/components/Space";
import { CiLock } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import SigninLayout from "../components/SigninLayout";

export const SigninSpacing = () => <Space spacing="my-6" />;

const SigninPage = () => {
  return (
    <SigninLayout>
      <form>
        <SigninSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Login</span>
          </Heading>
          <SigninSpacing />
          <p>
            Sign in to enjoy our services and get unlimited access to our
            shopping collections.
          </p>
          <SigninSpacing />
        </div>
        <Input icon={<IoMailOutline />} placeholder="Enter Your Email" />
        <SigninSpacing />
        <Input
          icon={<CiLock />}
          type="password"
          placeholder="Enter Your Password"
        />
        <SigninSpacing />
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <Checkbox small /> <span>Stay signed in</span>
          </div>
          <Button
            variant="text"
            elementType="link"
            href="/auth/forget-password"
          >
            Forgot Password?
          </Button>
        </div>
        <SigninSpacing />
        <Button full>Sign In</Button>
        <SigninSpacing />
        <div className=" text-center">
          Don’t have an account?{" "}
          <Button variant="text" elementType="link" href="/auth/signup">
            Register
          </Button>
        </div>
      </form>
    </SigninLayout>
  );
};

export default SigninPage;
