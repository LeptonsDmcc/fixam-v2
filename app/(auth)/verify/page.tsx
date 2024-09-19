"use client";

import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import SubmitForm from "../../components/Buttons/SubmitForm";
import OtpTimer from "./OtpTimer";
import { resendOTPAction, verifyAction } from "@/actions/auth";
import Wrapper from "@/app/components/Wrapper";
import BackButton from "@/app/components/Buttons/BackButton";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import Heading from "@/app/components/Heading";
import CodeInputs from "@/app/components/Inputs/CodeInputs";

interface Props {
  searchParams: { e: string };
}
const OTPage = ({ searchParams }: Props) => {
  const [state, formVerifyAction] = useFormState(verifyAction, {
    hasError: false,
    message: "",
  });

  console.log("state", state);

  if (state.hasError) {
    toast.error(state.message, { position: "top-center" });
  }

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
          <form action={formVerifyAction}>
            <ContentSpacing />
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
            <ContentSpacing />
            <div className="text-center">
              <Heading variant="h4">
                <span className=" font-semibold">Verify your Email</span>
              </Heading>
              <ContentSpacing />
              <p>
                Enter the 5-digit verification code sent to the email address or
                phone number to proceed
              </p>
              <ContentSpacing />
              <OtpTimer />
              <ContentSpacing />
            </div>

            <CodeInputs />
            <ContentSpacing />
            <SubmitForm>Verify</SubmitForm>
            <ContentSpacing />
          </form>
          <form
            action={resendOTPAction.bind(null, {
              email: searchParams.e,
            })}
          >
            <div className=" text-center">
              Didn’t receive the code yet?{" "}
              <SubmitForm variant="text" elementType="button" full={false}>
                Resend Code
              </SubmitForm>
            </div>
          </form>
        </section>
      </section>
    </Wrapper>
  );
};

export default OTPage;
