"use client";

import React, { useState } from "react";
import ActionButton from "../Buttons/ActionButton";
import MobileCategoryNavigation from "./MobileCategoryNavigation";
import { Category } from "iconsax-react";

const CategoryMenuTrigger = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <div>
      <MobileCategoryNavigation
        showCategory={showMenu}
        onCloseCategory={handleCloseMenu}
      />
      <ActionButton onClick={handleShowMenu} isMobile>
        <div className="flex flex-col items-center justify-center">
          <Category />
          <p className="text-xs">Categories</p>
        </div>
      </ActionButton>
    </div>
  );
};

export default CategoryMenuTrigger;
