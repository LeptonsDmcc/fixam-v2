import FormSpacing from "@/app/(main)/components/Spacing/FormSpacing";
import SigninLayout from "../components/SigninLayout";
import Heading from "@/app/(main)/components/Heading";
import FormInput from "@/app/(main)/components/Inputs/FormInput";
import Button from "@/app/(main)/components/Buttons/Button";

const ResetPasswordPage = () => {
  return (
    <SigninLayout>
      <form>
        <FormSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Forgot Password</span>
          </Heading>
          <FormSpacing />
          <p>Kindly enter your email address linked to your account</p>
          <FormSpacing />
        </div>
        <FormInput
          variant="email"
          placeholder="Enter Your Email Address or Phone Number"
        />

        <FormSpacing />

        <Button full>Submit</Button>
      </form>
    </SigninLayout>
  );
};

export default ResetPasswordPage;
