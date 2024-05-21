import React, { PropsWithChildren } from "react";

const IconHolder = ({ children }: PropsWithChildren) => {
  return (
    <li
      className=" hover:text-white h-[40px] w-[40px] rounded-full flex justify-center items-center 
    bg-[#F8F8F8] cursor-pointer hover:bg-orange-400 group transition-colors duration-200"
    >
      {children}
    </li>
  );
};

export default IconHolder;
