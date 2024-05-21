import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
}
const PerfectCenter = ({ children, styles }: PropsWithChildren<Props>) => {
  return (
    <div className={`${styles} flex justify-center items-center`}>
      {children}
    </div>
  );
};

export default PerfectCenter;
