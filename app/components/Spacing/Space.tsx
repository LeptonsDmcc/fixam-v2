import { PropsWithChildren } from "react";

interface Props {
  spacing: string;
}
const Space = ({ children, spacing }: PropsWithChildren<Props>) => {
  return <div className={spacing}>{children}</div>;
};

export default Space;
