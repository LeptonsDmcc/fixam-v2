import React, { PropsWithChildren } from "react";

interface Props {
  onClick: () => void;
  isVisibile?: boolean;
}

const IconHolder = ({
  children,
  isVisibile,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-orange-400 hover:text-white h-[40px] w-[40px] rounded-full flex justify-center items-center 
      bg-[#F8F8F8] cursor-pointer group transition-colors duration-200`}
    >
      {children}
    </button>
  );
};

export default IconHolder;
