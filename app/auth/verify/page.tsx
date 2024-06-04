import BackButton from "@/app/components/Buttons/BackButton";
import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import CodeInputs from "@/app/components/Inputs/CodeInputs";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

const OTPage = () => {
  return (
    <Wrapper>
      <Link href="/" className=" sticky top-2">
        <Image
          src="/assets/fixamlogo-b.png"
          alt="fixam logo"
          height={73}
          width={73}
        />
      </Link>

      <section className={`flex justify-center items-center h-screen`}>
        <section className="lg:max-w-[340px] xl:max-w-[440px] 2xl:max-w-[540px] m-auto">
          <BackButton>Go Back</BackButton>
          <form>
            <FormSpacing />
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
            <FormSpacing />
            <div className="text-center">
              <Heading variant="h4">
                <span className=" font-semibold">Verify your Email</span>
              </Heading>
              <FormSpacing />
              <p>
                Enter the 5-digit verification code sent to the email address or
                phone number to proceed
              </p>
              <FormSpacing />
              <p className=" text-gray-600">Code expires in 04:59 minutes</p>
              <FormSpacing />
            </div>

            <CodeInputs />
            <FormSpacing />

            <Button full>Verify</Button>
            <FormSpacing />
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
