import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
}
const PerfectCenter = ({ children, styles }: PropsWithChildren<Props>) => {
  return (
    <div className={`${styles} flex justify-center items-center gap-1`}>
      {children}
    </div>
  );
};

export default PerfectCenter;
