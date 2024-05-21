import { PropsWithChildren, forwardRef } from "react";

const Sliders = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className=" flex items-center gap-[10px]
      overflow-x-hidden overflow-y-hidden scroll-x-behavior"
      >
        {children}
      </div>
    );
  }
);

export default Sliders;
