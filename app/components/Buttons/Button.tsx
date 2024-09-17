import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";

export type ButtonVariantType = "normal" | "border" | "text";
export type ButtonElementType = "button" | "link";
export type ButtonColorType = "orange" | "red" | "gray";

// Common attributes between button and link elements
interface CommonAttributes {
  icon?: ReactNode;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  elementType?: ButtonElementType;
  styles?: string;
  full?: boolean;
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

const Button = ({
  children,
  icon,
  color = "orange",
  variant = "normal",
  elementType,
  styles,
  full,
  ...rest
}: PropsWithChildren<Props>) => {
  const isTextButton = variant === "text";

  const btnColors = {
    red: `${
      isTextButton
        ? "text-red-400"
        : "bg-red-400 text-white border-red-400 hover:bg-red-500"
    }   `,
    gray: `${
      isTextButton
        ? "text-gray-600"
        : "bg-gray-600 text-white border-gray-600 hover:bg-gray-800"
    } `,
    orange: `${
      isTextButton
        ? "text-orange-400 hover:font-semibold"
        : "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
    }  `,
  };

  const btnVariants = {
    normal: "py-3 px-4",
    text: "",
    border:
      "bg-transparent text-white border-orange-400 hover:bg-white hover:text-gray-900",
  };

  const baseStyle = `${styles} ${full ? "w-full" : isTextButton ? "" : "w-36"} 
  ${
    isTextButton
      ? "inline"
      : "h-12 rounded-md border flex items-center gap-1 justify-center"
  }
   text-sm duration-300 select-none disabled:cursor-not-allowed 
   disabled:bg-gray-300 disabled:border-gray-300 disabled:text-black`;

  switch (elementType) {
    case "link": {
      const { href, ...resprops } = rest as LinkProps;
      return (
        <Link
          href={href}
          {...resprops}
          className={`${baseStyle} ${btnColors[color]} ${btnVariants[variant]}`}
        >
          <span>{children}</span> <span>{icon}</span>
        </Link>
      );
    }

    default: {
      const resprops = rest as ButtonProps;
      return (
        <button
          {...resprops}
          className={`${baseStyle} ${btnColors[color]} ${btnVariants[variant]} `}
        >
          <span>{children}</span> <span>{icon}</span>
        </button>
      );
    }
  }
};

export default Button;
