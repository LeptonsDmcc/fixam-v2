"use client";

import MobileFilters from "@/app/components/Filters/MobileFilters";
import { Filter } from "iconsax-react";
import { useState } from "react";

const FilterMenuTrigger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <>
      <MobileFilters onCloseMenu={handleCloseMenu} showMenu={showMenu} />

      <button
        onClick={handleShowMenu}
        className="items-center flex gap-1
        lg:hidden"
      >
        <Filter />
        <span>Filter</span>
      </button>
    </>
  );
};

export default FilterMenuTrigger;
