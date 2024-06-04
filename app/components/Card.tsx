import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
}
const Card = ({ styles, children }: PropsWithChildren<Props>) => {
  return (
    <article className={`${styles}  shadow-10-01 rounded-md bg-gray-white p-3`}>
      {children}
    </article>
  );
};

export default Card;
