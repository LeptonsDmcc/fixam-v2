import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import FormInput from "@/app/components/Inputs/FormInput";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SigninLayout from "../components/SigninLayout";

const ForgetPasswordPage = () => {
  return (
    <SigninLayout>
      <form>
        <ContentSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Reset Password</span>
          </Heading>
          <ContentSpacing />
          <p>
            Create a new password for your account. Please enter your new
            password and confirm it to ensure accuracy.
          </p>
          <ContentSpacing />
        </div>
        <FormInput variant="password" placeholder="Enter Your New Password" />
        <ContentSpacing />
        <FormInput variant="password" placeholder="Confirm Your New Password" />
        <ContentSpacing />
        <Button full>Submit</Button>
      </form>
    </SigninLayout>
  );
};

export default ForgetPasswordPage;
