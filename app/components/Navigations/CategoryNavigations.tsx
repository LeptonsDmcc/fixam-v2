"use client";

import { IoIosMenu } from "react-icons/io";
import IconHolder from "../Icons/IconHolder";
import MainCategoryNavItems from "./MainCategoryNavItems";
import { useState } from "react";

interface Props {
  heading: string;
  isTop?: boolean;
}
const CategoryNavigations = ({ heading, isTop }: Props) => {
  const [isVisibile, setVisibility] = useState(false);

  const handleVisibility = () => {
    setVisibility(!isVisibile);
  };

  return (
    <nav className="relative">
      {isTop && (
        <IconHolder onClick={handleVisibility}>
          <IoIosMenu size={28} />
        </IconHolder>
      )}
      <nav
        className={`${
          isTop
            ? `absolute -translate-x-1/2 w-[224px] ${
                isVisibile ? "block" : "hidden"
              }`
            : "p-4 pr-0"
        }  bg-white  shadow-md rounded-lg top-[160%] 
           after:content-[''] after:h-14 after:border-[20px]  left-1/2
           after:absolute after:bottom-[100%] after:left-1/2 after:-translate-x-1/2
           after:border-t-transparent after:border-r-transparent after:border-l-transparent  
           after:border-b-white after:border-solid`}
      >
        <div className="py-4">
          <h3 className={`${isTop && "font-semibold w-[148px] m-auto"}`}>
            {heading}
          </h3>
          <MainCategoryNavItems isTop={isTop} />
        </div>
      </nav>
    </nav>
  );
};

export default CategoryNavigations;
