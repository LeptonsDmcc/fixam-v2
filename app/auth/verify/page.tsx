import BackButton from "@/app/components/Buttons/BackButton";
import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import { SigninSpacing } from "../signin/page";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/Inputs/Input";
import Button from "@/app/components/Buttons/Button";
import CodeInputs from "@/app/components/Inputs/CodeInputs";

const OTPage = () => {
  return (
    <Wrapper>
      <Image
        src="/assets/fixamlogo-b.png"
        alt="fixam logo"
        height={73}
        width={73}
        className=" sticky top-2"
      />

      <section className={`flex justify-center items-center h-screen`}>
        <section className="lg:max-w-[340px] xl:max-w-[440px] 2xl:max-w-[540px] m-auto">
          <BackButton>Go Back</BackButton>
          <form>
            <SigninSpacing />
            <div className="flex justify-center">
              <div
                className=" w-[120px] h-[120px] rounded-full bg-orange-400 
            flex justify-center items-center"
              >
                <Image
                  src="/assets/icons/sms.svg"
                  alt="fixam logo"
                  height={73}
                  width={73}
                />
              </div>
            </div>
            <SigninSpacing />
            <div className="text-center">
              <Heading variant="h4">
                <span className=" font-semibold">Verify your Email</span>
              </Heading>
              <SigninSpacing />
              <p>
                Enter the 5-digit verification code sent to the email address or
                phone number to proceed
              </p>
              <SigninSpacing />
              <p className=" text-gray-600">Code expires in 04:59 minutes</p>
              <SigninSpacing />
            </div>

            <CodeInputs />
            <SigninSpacing />

            <Button full>Verify</Button>
            <SigninSpacing />
            <div className=" text-center">
              Didn’t receive the code yet?{" "}
              <Button variant="text" elementType="button">
                Resend Code
              </Button>
            </div>
          </form>
        </section>
      </section>
    </Wrapper>
  );
};

export default OTPage;
