"use client";

import { PropsWithChildren } from "react";
import Overlay from "../Overlay";
import useNavStore from "@/app/Navigations/store";

const SidebarContainer = ({ children }: PropsWithChildren) => {
  const { isSidebarOpen, closeSidebar } = useNavStore();

  return (
    <>
      <Overlay
        shouldOverlay={isSidebarOpen}
        onClick={() => {
          closeSidebar();
          console.log("CLICKED!!");
        }}
      />
      <div
        className={`sidebar 
      ${isSidebarOpen ? "left-0 visible" : "-left-[100%] invisible"}
      has-scrollbar

      w-full bg-white fixed top-0  bottom-0 max-w-[320px]
      p-[30px] overflow-y-scroll overscroll-contain  duration-500 ease-in-out z-50

      lg:text-[0.941rem] lg:sticky lg:top-[30px] lg:left-0 lg:p-0 lg:min-w-[calc(25%-15px)]
      lg:mb-[30px] lg:visible lg:overflow-y-auto lg:overscroll-auto lg:z-0
    `}
      >
        {children}
      </div>
    </>
  );
};

export default SidebarContainer;
