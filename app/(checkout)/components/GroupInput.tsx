import { PropsWithChildren } from "react";

const GroupInput = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-2 items-center">{children}</div>;
};

export default GroupInput;
