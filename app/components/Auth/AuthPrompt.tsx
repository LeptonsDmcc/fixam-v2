import ContentSpacing from "../Spacing/ContentSpacing";
import { FcGoogle } from "react-icons/fc";
import BorderedOrangeButton from "../Buttons/BorderedOrangeButton";
import Button from "../Buttons/Button";
import HR from "../HR";
import Link from "next/link";
import { ROUTES } from "@/app/lib/contants";

interface Props {
  from: string;
  to: string;
  guestLink?: string;
}
const AuthPrompt = ({ from, to, guestLink }: Props) => {
  return (
    <section
      className="bg-white
      md:w-[600px]"
    >
      <BorderedOrangeButton full>
        <div className="flex items-center gap-3">
          <FcGoogle size={20} />
          Sign in with Google
        </div>
      </BorderedOrangeButton>
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
