import {
  Bank,
  CallCalling,
  GlobalSearch,
  ShoppingBag,
  User,
} from "iconsax-react";
import Link from "next/link";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Button from "../Buttons/Button";
import SocialIcons from "../Icons/SocialIcons";
import SectionSpacing from "../Spacing/SectionSpacing";
import MobileMenuHeader from "./MobileMenuHeader";
import DrawerWrapper from "../DrawerWrapper";
import { ROUTES } from "@/app/lib/contants";
import MobileMenuLink from "./MobileMenuLink";

const mobileLinks = [
  // {
  //   icon: <Bank />,
  //   text: "Sell on Fixam",
  //   href: "",
  // },
  {
    icon: <User />,
    text: "My Account",
    href: `${ROUTES.account}/profile`,
  },
  {
    icon: <GlobalSearch />,
    text: "Track Orders",
    href: "/order/track",
  },
  {
    icon: <ShoppingBag />,
    text: "Orders",
    href: `${ROUTES.account}/orders`,
  },
  {
    icon: <IoIosHelpCircleOutline size={24} />,
    text: "Help",
    href: "/#help",
  },
  {
    icon: <CallCalling />,
    text: "Contact",
    href: "/#contact",
  },
];

interface Props {
  onCloseMenu?: () => void;
  showMenu: boolean;
}

const MobileMenu = ({ onCloseMenu, showMenu }: Props) => {
  return (
    <DrawerWrapper showMenu={showMenu}>
      <div className="px-4 py-6">
        <MobileMenuHeader onCloseMenu={onCloseMenu} />
        <SectionSpacing />
        <Button full>Sign in</Button>
        <SectionSpacing />
        <ul className="px-2">
          {mobileLinks.map(({ text, icon, href }) => (
            <MobileMenuLink
              onCloseMenu={onCloseMenu}
              text={text}
              icon={icon}
              to={href}
            />
          ))}
        </ul>
        <div className="my-20 flex justify-center flex-col items-center gap-6">
          <p>Socials</p>
          <SocialIcons isMobile />
        </div>
      </div>
    </DrawerWrapper>
  );
};

export default MobileMenu;
