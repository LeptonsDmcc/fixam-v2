import { PropsWithChildren } from "react";

interface Props {
  variant: "h1" | "h2" | "h3" | "h4";
  styles?: string;
}
const Heading = ({ variant, styles, children }: PropsWithChildren<Props>) => {
  switch (variant) {
    case "h1":
      return (
        <h2 className={`${styles} text-gray-800 text-[3.5rem]/[70px]`}>
          {children}
        </h2>
      );

    case "h2":
      return (
        <h2 className={`${styles} text-gray-800 text-[2.5rem]/[48px]`}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={`${styles} text-gray-800 text-[1.5rem]/[36px]`}>
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4 className={`${styles} text-gray-800 text-[1.25rem]/[32px]`}>
          {children}
        </h4>
      );
  }
};

export default Heading;
