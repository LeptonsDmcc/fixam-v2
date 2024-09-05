import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
}
const Wrapper = ({ children, styles }: PropsWithChildren<Props>) => {
  return <section className={`${styles} wrapper`}>{children}</section>;
};

export default Wrapper;
