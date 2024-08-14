import { ROUTES } from "@/app/lib/contants";
import { LinkType } from "@/app/lib/types";
import { Crown1, Heart, Home } from "iconsax-react";
import CategoryMenuTrigger from "./CategoryMenuTrigger";
import MobileBottomNavLink from "./MobileBottomNavLink";

const bottomLinks: LinkType[] = [
  {
    icon: <Home />,
    to: "/",
    text: "Home",
  },
  {
    icon: <Crown1 />,
    to: `${ROUTES.product}/deals`,
    text: "Deals",
  },
  {
    icon: <Heart />,
    to: `${ROUTES.account}/save-items`,
    text: "Favorites",
  },
];
const MobileBottomNav = () => {
  return (
    <div
      className="mt-28
    lg:hidden"
    >
      <div
        className="mobile-bottom-navigation mobile-bottom-nav-shadow
        bg-white fixed bottom-0  w-full left-0 right-0 
        max-w-[500px] m-auto flex justify-around items-center py-[5px]
        z-[30] rounded-t-[10px]"
      >
        {bottomLinks.map(({ to, icon, text }) => (
          <MobileBottomNavLink key={text} text={text} to={to} icon={icon} />
        ))}
        <CategoryMenuTrigger />
      </div>
    </div>
  );
};

export default MobileBottomNav;
