"use client";

import GoogleAuthButton from "@/app/(auth)/components/GoogleAuthButton";
import { ROUTES } from "@/app/lib/contants";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Link from "next/link";
import Button from "../Buttons/Button";
import HR from "../HR";
import ContentSpacing from "../Spacing/ContentSpacing";

interface Props {
  from: string;
  to: string;
  guestLink?: string;
}

const AuthPrompt = ({ from, to, guestLink }: Props) => {
  const clientId = process.env.NEXT_PUBLIC_G_CLIENT_ID;

  console.log("clientId", process.env.NEXT_PUBLIC_G_CLIENT_ID);

  return (
    <section
      className="bg-white
      md:w-[600px]"
    >
      {/* <SignInWithGoogle /> */}
      <GoogleOAuthProvider clientId={clientId || ""}>
        <GoogleAuthButton />
      </GoogleOAuthProvider>
      <ContentSpacing />
      <div className="relative">
        <HR />
        <span
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
        p-1 bg-white"
        >
          Or
        </span>
      </div>
      <ContentSpacing />
      <Button full elementType="link" href={`/signin?from=${from}&to=${to}`}>
        Sign in via email
      </Button>
      <ContentSpacing />
      <p className=" text-center text-sm">
        By continuing you agree to the Policy and Rules
      </p>
      <ContentSpacing />
      <div className=" flex justify-center">
        <Link
          href={`${guestLink ? guestLink : ROUTES.shoppingCartcheckout}?g=y`}
          className="text-gray-400 hover:text-gray-500"
        >
          Checkout as guest
        </Link>
      </div>
    </section>
  );
};

export default AuthPrompt;
