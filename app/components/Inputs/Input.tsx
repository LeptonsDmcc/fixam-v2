import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input = ({ icon, ...rest }: Props) => {
  return (
    <div className="relative">
      <span
        className="absolute text-2xl text-gray-200 top-0 bottom-0 left-6 
        flex justify-center items-center"
      >
        {icon}
      </span>
      <input
        {...rest}
        className={`${
          icon ? "px-[3.8rem]" : "px-4"
        } border h-12 w-full rounded-lg text-gray-400 placeholder:text-gray-200 `}
      />
    </div>
  );
};

export default Input;
