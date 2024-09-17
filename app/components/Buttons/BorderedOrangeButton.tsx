import { PropsWithChildren } from "react";

export type TextColorType = "orange" | "white";

interface Props {
  full?: boolean;
  onClick?: () => void;
  type?: "button" | "reset";
  textColor?: TextColorType;
}

const BorderedOrangeButton = ({
  full,
  onClick,
  type,
  children,
  textColor = "orange",
}: PropsWithChildren<Props>) => {
  const textColors: { [key in TextColorType]: string } = {
    white: "text-white",
    orange: "text-orange-400",
  };
  return (
    <button
      type={type ? type : "submit"}
      onClick={onClick}
      className={`${full ? "w-full" : "w-36"} ${
        textColors[textColor]
      }  h-12 text-sm flex items-center gap-1 justify-center
        rounded-md border duration-300 select-none bg-transparent 
        border-orange-400 hover:bg-white hover:text-gray-900
    `}
    >
      {children}
    </button>
  );
};

export default BorderedOrangeButton;
