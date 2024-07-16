"use client";

import useNavStore from "@/app/store copy/nav-store";
import { Category, Crown1, Heart, Home } from "iconsax-react";
import ActionButton from "../Buttons/ActionButton";
import MobileCategoryNavigation from "./MobileCategoryNavigation";
import CategoryMenuTrigger from "./CategoryMenuTrigger";

const MobileBottomNav = () => {
  const { showMenu, showSidebar } = useNavStore();
  return (
    <div
      className="mobile-bottom-navigation
      mobile-bottom-nav-shadow
    bg-white fixed bottom-0  w-full left-0 right-0 
    max-w-[500px] m-auto flex justify-around items-center py-[5px]
    z-40 rounded-t-[10px] lg:hidden"
    >
      <ActionButton onClick={showMenu} isMobile styles=" text-orange-400">
        <div className="flex flex-col items-center justify-center">
          <Home />
          <p className="text-xs">Home</p>
        </div>
      </ActionButton>

      <ActionButton onClick={showMenu} isMobile>
        <div className="flex flex-col items-center justify-center">
          <Crown1 />
          <p className="text-xs">Deals</p>
        </div>
      </ActionButton>

      <ActionButton onClick={showMenu} isMobile>
        <div className="flex flex-col items-center justify-center">
          <Heart />
          <p className="text-xs">Favorites</p>
        </div>
      </ActionButton>
      <CategoryMenuTrigger />
    </div>
  );
};

export default MobileBottomNav;
