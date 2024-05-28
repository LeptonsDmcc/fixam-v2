import Link from "next/link";
import Image from "next/image";
import BackButton from "@/app/components/Buttons/BackButton";
import { PropsWithChildren } from "react";

interface Props {
  swap?: boolean;
}
const SigninLayout = ({ children, swap }: PropsWithChildren<Props>) => {
  return (
    <section className="flex">
      <section
        className={`${
          swap && "order-2"
        } w-1/2 flex justify-center items-center h-screen`}
      >
        <section className="w-[80%] m-auto">
          <BackButton>Go Back</BackButton>
          {children}
        </section>
      </section>

      <div className={`${swap && " order-1"}  w-1/2 `}>
        <div className={`${swap ? "left-0" : "right-0"} fixed top-0 bottom-0 `}>
          <Link href="/">
            <Image
              src="/assets/fixamlogo-b.png"
              alt="fixam logo"
              height={73}
              width={73}
              className="absolute top-5 left-5"
            />
          </Link>

          <Image
            src="/assets/login-fixam.png"
            alt="fixam login photo"
            height={1024}
            width={720}
            className=" w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SigninLayout;
