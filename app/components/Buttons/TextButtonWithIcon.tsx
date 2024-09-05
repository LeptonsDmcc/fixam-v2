import { PropsWithChildren, ReactNode } from "react";
import Button from "./Button";

interface Props {
  icon: ReactNode;
}

const TextButtonWithIcon = ({ icon, children }: PropsWithChildren<Props>) => {
  return (
    <Button variant="text">
      <div className="flex items-center gap-2">
        <span>{icon}</span> <span>{children}</span>
      </div>
    </Button>
  );
};

export default TextButtonWithIcon;
