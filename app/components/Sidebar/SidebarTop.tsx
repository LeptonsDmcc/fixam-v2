"use client";

import useNavStore from "@/app/Navigations/store";
import { IoCloseOutline } from "react-icons/io5";

const SidebarTop = () => {
  const { closeSidebar } = useNavStore();

  return (
    <div
      className="sidebar-top
      flex justify-between items-center mb-[10px]
    "
    >
      <h2
        className="sidebar-title
          text-gray-500 uppercase tracking-[0.8px] font-semibold"
      >
        Category
      </h2>

      <button
        onClick={closeSidebar}
        className="sidebar-close-btn
      text-gray-800 text-[22px] font-semibold
       lg:hidden"
      >
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default SidebarTop;
