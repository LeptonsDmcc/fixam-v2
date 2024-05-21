import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
}
const Card = ({ styles, children }: PropsWithChildren<Props>) => {
  return (
    <article className={`${styles} rounded-md bg-gray-100 p-3`}>
      {children}
    </article>
  );
};

export default Card;
