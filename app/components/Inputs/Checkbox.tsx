"use client";

import { FaCheck } from "react-icons/fa6";

interface Props {
  small?: boolean;
}
const Checkbox = ({ small }: Props) => {
  return (
    <label
      htmlFor="checkbox"
      className={`${
        small ? "h-5 w-5" : "h-6 w-6"
      }  rounded-md border-[1.5px] border-gray-900
      flex items-center justify-center cursor-pointer`}
    >
      <FaCheck
        className={`${small ? "text-xs" : "text-sm"}  pointer-events-none`}
      />
      <input id="checkbox" type="checkbox" hidden className="" />
    </label>
  );
};

export default Checkbox;
