import { PropsWithChildren } from "react";

interface Props {
  onClick?: () => void;
  isActive?: boolean;
}
const TabButton = ({
  onClick,
  isActive,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`${isActive && "font-semibold"} hover:font-semibold
      text-sm md:text-base`}
    >
      {children}
    </button>
  );
};

export default TabButton;
