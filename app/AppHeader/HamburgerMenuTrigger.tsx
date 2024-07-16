"use client";

import { HambergerMenu } from "iconsax-react";
import { useState } from "react";
import MobileMenu from "../components/Navigations/MobileMenu";

const HamburgerMenuTrigger = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <div>
      <HambergerMenu onClick={handleShowMenu} />
      <MobileMenu showMenu={showMenu} onCloseMenu={handleCloseMenu} />
    </div>
  );
};

export default HamburgerMenuTrigger;
