"use client";

import { IoIosMenu } from "react-icons/io";
import CollapsibleCard from "../Cards/CollapsibleCard";
import IconHolder from "../Icons/IconHolder";
import Space from "../Spacing/Space";
import MainCategoryNavItems from "./MainCategoryNavItems";

interface Props {
  heading: string;
  isTop?: boolean;
  isCollapsible?: boolean;
}

const CategoryNavigations = ({ heading, isCollapsible, isTop }: Props) => {
  return (
    <nav className="relative z-10 h-max group hidden md:block">
      {isTop && (
        <IconHolder>
          <IoIosMenu size={28} />
        </IconHolder>
      )}

      {isCollapsible ? (
        <CollapsibleCard heading={"Browse Categories"}>
          <MainCategoryNavItems isTop={isTop} />
        </CollapsibleCard>
      ) : (
        <nav
          className={`${
            isTop
              ? `absolute -translate-x-1/2 w-[224px] group-hover:block hidden`
              : "p-4 pr-0"
          }  bg-white shadow-10-01 rounded-lg top-[160%] 
              after:content-[''] after:h-14 after:border-[20px] left-1/2
              after:absolute after:bottom-[100%] after:left-1/2 after:-translate-x-1/2
              after:border-t-transparent after:border-r-transparent after:border-l-transparent  
              after:border-b-white after:border-solid
            `}
        >
          <div className="py-4">
            <h3 className={`${isTop && "w-[148px] m-auto"} font-semibold`}>
              {heading}
            </h3>
            <Space spacing="my-3" />
            <MainCategoryNavItems isTop={isTop} />
          </div>
        </nav>
      )}
    </nav>
  );
};

export default CategoryNavigations;
