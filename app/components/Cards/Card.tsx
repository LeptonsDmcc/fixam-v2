import { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: string;
  withPaddingRight?: boolean;
}
const Card = ({
  styles,
  withPaddingRight,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <section
      className={`${styles} p-4 ${
        withPaddingRight ? "" : "pr-0"
      } bg-white shadow-fixam rounded-lg`}
    >
      {children}
    </section>
  );
};

export default Card;
