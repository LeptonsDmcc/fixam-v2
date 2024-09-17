import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SigninLayout from "../components/SigninLayout";
import Heading from "@/app/components/Heading";
import FormInput from "@/app/components/Inputs/FormInput";
import Button from "@/app/components/Buttons/Button";

const ResetPasswordPage = () => {
  return (
    <SigninLayout>
      <form>
        <ContentSpacing />
        <div className="text-center">
          <Heading variant="h4">
            <span className=" font-semibold">Forgot Password</span>
          </Heading>
          <ContentSpacing />
          <p>Kindly enter your email address linked to your account</p>
          <ContentSpacing />
        </div>
        <FormInput
          variant="email"
          placeholder="Enter Your Email Address or Phone Number"
        />

        <ContentSpacing />

        <Button full>Submit</Button>
      </form>
    </SigninLayout>
  );
};

export default ResetPasswordPage;
