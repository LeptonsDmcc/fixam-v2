"use client";

import { PropsWithChildren, useState } from "react";
import SidebarAccordionMenu from "./SidebarAccordionMenu";

interface Props {
  categoryName: string;
}

const SidebarMenuCategoryContainer = ({
  categoryName,
  children,
}: PropsWithChildren<Props>) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="sidebar-menu-category">
      <SidebarAccordionMenu
        categoryName={categoryName}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
      <ul
        className={`sidebar-submenu-category-list
          ${isActive ? "max-h-max visible py-[13px]" : "invisible max-h-0"}
           px-0 pb-[8px]
 
          border-t border-cultured overflow-hidden 
          duration-500 ease-in-out           
        `}
      >
        {children}
      </ul>
    </li>
  );
};

export default SidebarMenuCategoryContainer;
