import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import FormInput from "@/app/components/Inputs/FormInput";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import SigninLayout from "../components/SigninLayout";

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
