"use client";

import { Crown1, Heart, Home } from "iconsax-react";
import ActionButton from "../Buttons/ActionButton";
import CategoryMenuTrigger from "./CategoryMenuTrigger";

const MobileBottomNav = () => {
  return (
    <div
      className=" mt-28
    lg:hidden"
    >
      <div
        className="mobile-bottom-navigation
      mobile-bottom-nav-shadow
    bg-white fixed bottom-0  w-full left-0 right-0 
    max-w-[500px] m-auto flex justify-around items-center py-[5px]
    z-[39] rounded-t-[10px] "
      >
        <ActionButton isMobile styles=" text-orange-400">
          <div className="flex flex-col items-center justify-center">
            <Home />
            <p className="text-xs">Home</p>
          </div>
        </ActionButton>

        <ActionButton isMobile>
          <div className="flex flex-col items-center justify-center">
            <Crown1 />
            <p className="text-xs">Deals</p>
          </div>
        </ActionButton>

        <ActionButton isMobile>
          <div className="flex flex-col items-center justify-center">
            <Heart />
            <p className="text-xs">Favorites</p>
          </div>
        </ActionButton>
        <CategoryMenuTrigger />
      </div>
    </div>
  );
};

export default MobileBottomNav;
