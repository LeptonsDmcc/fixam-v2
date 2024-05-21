import { PropsWithChildren, ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  color?: "orange";
  variant?: "normal" | "border";
}
const Button = ({
  children,
  icon,
  color = "orange",
  variant = "normal",
}: PropsWithChildren<Props>) => {
  const btnColors = {
    orange:
      "bg-orange-400 text-white border-orange-400 hover:bg-white hover:text-gray-900",
  };

  const btnVariants = {
    normal: "py-3 px-4 duration-300 ",
    border:
      "bg-transparent text-white border-orange-400 hover:bg-white hover:text-gray-900",
  };

  return (
    <button
      className={`${btnColors[color]} ${btnVariants[variant]} 
      w-36 h-12 text-sm flex items-center gap-1 justify-center
      rounded-md border duration-300`}
    >
      <span>{children}</span> <span>{icon}</span>
    </button>
  );
};

export default Button;
