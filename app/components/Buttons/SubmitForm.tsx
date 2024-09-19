"use client";

import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import { useFormStatus } from "react-dom";
import Button, {
  ButtonColorType,
  ButtonElementType,
  ButtonVariantType,
} from "./Button";

interface CommonAttributes {
  variant?: ButtonVariantType;
  full?: boolean;
  isDefault?: boolean;
  color?: ButtonColorType;
  elementType?: ButtonElementType;
}

// Attributes specific to button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  elementType?: "button";
}

// Attributes specific to link
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  elementType?: "link";
  href: string;
}

// Discriminated union of props
type Props = CommonAttributes & (ButtonProps | LinkProps);

const SubmitForm = ({
  variant,
  elementType,
  color,
  children,
  full = true,
  isDefault = true,
}: PropsWithChildren<Props>) => {
  const { pending } = useFormStatus();

  if (isDefault)
    return (
      <Button
        color={color || "orange"}
        disabled={pending}
        variant={variant}
        elementType={"button"}
        full={full}
      >
        {pending ? "Loading..." : children}
      </Button>
    );
};

export default SubmitForm;
