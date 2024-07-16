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

const mobileLinks = [
  {
    icon: <Bank />,
    text: "Sell on Fixam",
    href: "",
  },
  {
    icon: <User />,
    text: "My Account",
    href: "",
  },
  {
    icon: <GlobalSearch />,
    text: "Track Orders",
    href: "",
  },
  {
    icon: <ShoppingBag />,
    text: "Orders",
    href: "",
  },
  {
    icon: <IoIosHelpCircleOutline size={24} />,
    text: "Help",
    href: "",
  },
  {
    icon: <CallCalling />,
    text: "Contact",
    href: "",
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
            <li key={text} className="my-8">
              <Link
                href={href}
                className="flex gap-4 hover:text-orange-400 duration-300"
              >
                {icon} <span>{text}</span>
              </Link>
            </li>
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
