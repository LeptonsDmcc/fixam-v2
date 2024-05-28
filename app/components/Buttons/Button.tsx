import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";

// Common attributes between button and link elements
interface CommonAttributes {
  icon?: ReactNode;
  color?: "orange";
  variant?: "normal" | "border" | "text";
  elementType?: "button" | "link";
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
    orange: `${
      isTextButton ? "text-orange-400" : "bg-orange-400 text-white"
    }   border-orange-400 hover:bg-white hover:text-gray-900`,
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
   text-sm duration-300 select-none`;

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
          className={`${baseStyle} ${btnColors[color]} ${btnVariants[variant]}`}
        >
          <span>{children}</span> <span>{icon}</span>
        </button>
      );
    }
  }
};

export default Button;
