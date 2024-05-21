"use client";

import Image from "next/image";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

interface Props {
  onClick: () => void;
  isActive: boolean;
  categoryName: string;
}
const SidebarAccordionMenu = ({ isActive, categoryName, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="sidebar-accordion-menu
      w-full flex justify-between items-center py-[7px]"
    >
      <div
        className="menu-title-flex 
      flex items-center gap-[10px]
      "
      >
        <Image
          src={
            categoryName.toLocaleLowerCase().includes("construction")
              ? "/assets/icons/construction.png"
              : categoryName.toLocaleLowerCase().includes("smart homes")
              ? "/assets/icons/smart-homes.png"
              : "/assets/icons/wind-energy.png"
          }
          alt="clothes"
          width={20}
          height={20}
          className="menu-title-img"
        />

        <p className="menu-title">{categoryName.split("/")[0]}</p>
      </div>

      <div className=" text-gray-600 ">
        {!isActive && <IoAddOutline />}
        {isActive && <IoRemoveOutline />}
      </div>
    </button>
  );
};

export default SidebarAccordionMenu;
