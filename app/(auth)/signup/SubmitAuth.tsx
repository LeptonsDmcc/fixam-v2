import Button, {
  ButtonVariantType,
} from "@/app/(main)/components/Buttons/Button";
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import { useFormStatus } from "react-dom";

// Attributes specific to button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  elementType?: "button";
}

// Attributes specific to link
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  elementType?: "link";
  href: string;
}

interface CommonAttributes {
  variant?: ButtonVariantType;
  full?: boolean;
}

// Discriminated union of props
type Props = CommonAttributes & (ButtonProps | LinkProps);

const SubmitAuth = ({
  variant,
  elementType,
  children,
  full = true,
}: PropsWithChildren<Props>) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      variant={variant}
      elementType={elementType}
      full={full}
    >
      {pending ? "Loading..." : children}
    </Button>
  );
};

export default SubmitAuth;
