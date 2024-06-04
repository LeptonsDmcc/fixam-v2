"use client";

import { InputHTMLAttributes } from "react";
import { FaCheck } from "react-icons/fa6";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  small?: boolean;
  htmlFor: string;
}
const Checkbox = ({ small, htmlFor, ...rest }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${
        small ? "h-5 w-5" : "h-6 w-6"
      }  rounded-md border-[1.5px] border-gray-900
      flex items-center justify-center cursor-pointer`}
    >
      <input {...rest} id={htmlFor} type="checkbox" hidden className="peer" />
      <FaCheck
        className={`${
          small ? "text-xs" : "text-sm"
        } peer-checked:opacity-100 peer-checked:scale-100 opacity-0 scale-0 pointer-events-none duration-200`}
      />
    </label>
  );
};

export default Checkbox;
