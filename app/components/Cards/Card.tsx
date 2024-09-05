import { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Card = ({ children }: PropsWithChildren<Props>) => {
  return (
    <section className="p-4 pr-0 bg-white shadow-10-01 rounded-lg">
      {children}
    </section>
  );
};

export default Card;
