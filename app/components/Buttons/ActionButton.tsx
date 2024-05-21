import { PropsWithChildren } from "react";

interface Props {
  isMobile?: boolean;
  onClick?: () => void;
  styles?: string;
}
const ActionButton = ({
  children,
  isMobile,
  onClick,
  styles,
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`${styles} relative
    ${isMobile ? " p-2" : " text-gray-400 p-1"}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
