import { SigninSpacing } from "@/app/auth/signin/page";
import Button from "../Buttons/Button";
import HR from "../HR";
import BuyNowButton from "../Buttons/BuyNowButton";
import BorderedOrangeButton from "../Buttons/BorderedOrangeButton";
import { FcGoogle } from "react-icons/fc";

const AuthPrompt = () => {
  return (
    <section className="bg-white w-[600px]">
      <BorderedOrangeButton full>
        <div className="flex items-center gap-3">
          <FcGoogle size={20} />
          Sign in with Google
        </div>
      </BorderedOrangeButton>
      <SigninSpacing />
      <div className="relative">
        <HR />
        <span
          className="absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2
        p-1 bg-white"
        >
          Or
        </span>
      </div>
      <SigninSpacing />
      <Button full elementType="link" href="/auth/signin">
        Sign in via email
      </Button>
      <SigninSpacing />
      <p className=" text-center text-sm">
        By continuing you agree to the Policy and Rules
      </p>
      <SigninSpacing />
      <div className=" flex justify-center">
        <button className="text-gray-400 hover:text-gray-500">
          Checkout as guest
        </button>
      </div>
    </section>
  );
};

export default AuthPrompt;
