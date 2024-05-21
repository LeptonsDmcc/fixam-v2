import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
}
const Wrapper = ({ children, styles }: PropsWithChildren<Props>) => {
  return <div className={`${styles} wrapper`}>{children}</div>;
};

export default Wrapper;
