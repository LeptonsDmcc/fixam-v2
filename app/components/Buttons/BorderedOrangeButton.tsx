import { PropsWithChildren } from "react";

interface Props {
  full?: boolean;
  onClick?: () => void;
}

const BorderedOrangeButton = ({
  full,
  onClick,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`${
        full ? "w-full text-orange-400" : "w-36 text-white"
      } h-12 text-sm flex items-center gap-1 justify-center
        rounded-md border duration-300 select-none bg-transparent 
        border-orange-400 hover:bg-white hover:text-gray-900
    `}
    >
      {children}
    </button>
  );
};

export default BorderedOrangeButton;
