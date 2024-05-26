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
  variant?: "normal" | "border";
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
  const btnColors = {
    orange:
      "bg-orange-400 text-white border-orange-400 hover:bg-white hover:text-gray-900",
  };

  const btnVariants = {
    normal: "py-3 px-4 duration-300 ",
    border:
      "bg-transparent text-white border-orange-400 hover:bg-white hover:text-gray-900",
  };

  const baseStyle = `${styles} ${
    full ? "w-full" : "w-36"
  } h-12 text-sm flex items-center gap-1 justify-center
  rounded-md border duration-300 select-none`;

  switch (elementType) {
    case "link": {
      const { href, ...resprops } = rest as LinkProps;
      return (
        <Link
          href={""}
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
