import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

import fixAuthSideImage1 from "@/public/assets/fix-auth-side-image.jpg";
import Logo from "@/app/(main)/components/Logo";
import BackButton from "@/app/(main)/components/Buttons/BackButton";

interface Props {
  swap?: boolean;
}
const SigninLayout = ({ children, swap }: PropsWithChildren<Props>) => {
  return (
    <section className="flex h-screen">
      <section
        className={`${
          swap && "order-2"
        } p-6 flex justify-center items-center h-screen overflow-y-auto has-scrollbar
          lg:w-1/2 lg:p-16 md:p-0`}
      >
        <section className="lg:w-[80%] m-auto">
          <BackButton>Go Back</BackButton>
          {children}
        </section>
      </section>

      <div className={`${swap && "order-1"} lg:w-1/2`}>
        <div
          className={`${swap ? "left-0" : "right-0"} fixed' top-0 bottom-0 `}
        >
          <Link href="/">
            <div className="absolute top-5 left-5">
              <Logo />
            </div>
          </Link>
          <Image
            src={fixAuthSideImage1}
            alt="fixam login photo"
            className="hidden lg:w-full lg:h-screen lg:block object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default SigninLayout;
