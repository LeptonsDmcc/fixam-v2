import { PropsWithChildren } from "react";

interface Props {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  styles?: string;
  bold?: boolean;
}
const Heading = ({
  variant,
  styles,
  bold,
  children,
}: PropsWithChildren<Props>) => {
  switch (variant) {
    case "h1":
      return (
        <h2
          className={`${styles} ${
            bold && "font-semibold"
          } text-gray-800 text-[3.5rem]/[70px]`}
        >
          {children}
        </h2>
      );

    case "h2":
      return (
        <h2
          className={`${styles} ${
            bold && "font-semibold"
          } text-gray-800 text-[2.5rem]/[48px]`}
        >
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3
          className={`${styles} ${
            bold && "font-semibold"
          } text-gray-800 text-[1.5rem]/[36px]`}
        >
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4
          className={`${styles} ${
            bold && "font-semibold"
          } text-gray-800 lg:text-[1.25rem]/[32px]`}
        >
          {children}
        </h4>
      );

    case "h5":
      return (
        <h4
          className={`${styles} ${
            bold && "font-semibold"
          } text-gray-800 text-base`}
        >
          {children}
        </h4>
      );

    case "h6":
      return (
        <h4
          className={`${styles} ${
            bold && "font-semibold"
          } text-gray-800 text-sm`}
        >
          {children}
        </h4>
      );
  }
};

export default Heading;
