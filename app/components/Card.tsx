import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
  elementType?: "section";
  removePadding?: boolean;
}
const Card = ({
  styles,
  elementType,
  removePadding,
  children,
}: PropsWithChildren<Props>) => {
  const baseStyles = `shadow-10-01 rounded-md bg-gray-white ${
    !removePadding && "p-3"
  }`;

  switch (elementType) {
    case "section":
      return (
        <section className={`${styles}  ${baseStyles}`}>{children}</section>
      );
    default:
      return (
        <article className={`${styles}  ${baseStyles}`}>{children}</article>
      );
  }
};

export default Card;
