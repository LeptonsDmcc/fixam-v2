import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
  elementType?: "section" | "main";
  removePadding?: boolean;
  borderedCard?: boolean;
}
const Card = ({
  styles,
  elementType,
  removePadding,
  children,
  borderedCard,
}: PropsWithChildren<Props>) => {
  const baseStyles = `${
    borderedCard ? "border" : "shadow-10-01"
  }  rounded-md bg-gray-white ${!removePadding && "p-3"}`;

  switch (elementType) {
    case "section":
      return (
        <section className={`${styles}  ${baseStyles}`}>{children}</section>
      );
    case "main":
      return <main className={`${styles}  ${baseStyles}`}>{children}</main>;
    default:
      return (
        <article className={`${styles}  ${baseStyles}`}>{children}</article>
      );
  }
};

export default Card;
