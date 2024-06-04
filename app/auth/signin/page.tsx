import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import Checkbox from "@/app/components/Inputs/Checkbox";
import FormInput from "@/app/components/Inputs/FormInput";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import SigninLayout from "../components/SigninLayout";

const SigninPage = () => {
  return (
    <SigninLayout>
      <form>
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
        <FormInput variant="email" />
        <FormSpacing />
        <FormInput placeholder="Enter Your Password" variant="password" />
        <FormSpacing />
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <Checkbox htmlFor="staySignIn" small /> <span>Stay signed in</span>
          </div>
          <Button
            variant="text"
            elementType="link"
            href="/auth/forget-password"
          >
            Forgot Password?
          </Button>
        </div>
        <FormSpacing />
        <Button full>Sign In</Button>
        <FormSpacing />
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
