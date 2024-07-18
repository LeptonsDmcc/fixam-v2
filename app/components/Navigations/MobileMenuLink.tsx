import { LinkType } from "@/app/lib/types";
import Link from "next/link";
import NavLink from "./NavLink";

interface Props extends LinkType {
  onCloseMenu?: () => void;
}

const MobileMenuLink = ({ onCloseMenu, text, icon, to }: Props) => {
  return (
    <li onClick={onCloseMenu} key={text} className="my-8">
      <NavLink
        activeClassName="text-orange-400"
        href={to}
        className="flex gap-4 hover:text-orange-400 duration-300"
      >
        {icon} <span>{text}</span>
      </NavLink>
    </li>
  );
};

export default MobileMenuLink;
