import FormSpacing from "../Spacing/FormSpacing";
import { FcGoogle } from "react-icons/fc";
import BorderedOrangeButton from "../Buttons/BorderedOrangeButton";
import Button from "../Buttons/Button";
import HR from "../HR";

const AuthPrompt = () => {
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
      <FormSpacing />
      <div className="relative">
        <HR />
        <span
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
        p-1 bg-white"
        >
          Or
        </span>
      </div>
      <FormSpacing />
      <Button full elementType="link" href="/auth/signin">
        Sign in via email
      </Button>
      <FormSpacing />
      <p className=" text-center text-sm">
        By continuing you agree to the Policy and Rules
      </p>
      <FormSpacing />
      <div className=" flex justify-center">
        <button className="text-gray-400 hover:text-gray-500">
          Checkout as guest
        </button>
      </div>
    </section>
  );
};

export default AuthPrompt;
