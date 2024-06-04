import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import FormInput from "@/app/components/Inputs/FormInput";
import SigninLayout from "../components/SigninLayout";
import FormSpacing from "@/app/components/Spacing/FormSpacing";

const ForgetPasswordPage = () => {
  return (
    <SigninLayout>
      <form>
        <FormSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Reset Password</span>
          </Heading>
          <FormSpacing />
          <p>
            Create a new password for your account. Please enter your new
            password and confirm it to ensure accuracy.
          </p>
          <FormSpacing />
        </div>
        <FormInput variant="password" placeholder="Enter Your New Password" />
        <FormSpacing />
        <FormInput variant="password" placeholder="Confirm Your New Password" />
        <FormSpacing />
        <Button full>Submit</Button>
      </form>
    </SigninLayout>
  );
};

export default ForgetPasswordPage;
