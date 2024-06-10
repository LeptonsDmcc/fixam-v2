import Card from "@/app/components/Card";
import NavLink from "@/app/components/Navigations/NavLink";
import { ROUTES } from "@/app/lib/contants";
import { LinkType } from "@/app/lib/types";
import { HiOutlineLogout } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { TbWorldSearch } from "react-icons/tb";
import { TiShoppingBag } from "react-icons/ti";

const sideNavItems: LinkType[] = [
  {
    icon: <IoPersonOutline />,
    text: "Profile",
    to: `${ROUTES.account}/profile`,
  },
  {
    icon: <LiaShoppingBagSolid />,
    text: "Orders",
    to: `${ROUTES.account}/orders`,
  },
  {
    icon: <RxHeart />,
    text: "Save Items",
    to: `${ROUTES.account}/save-items`,
  },

  {
    icon: <HiOutlineLogout className=" rotate-180" />,
    text: "Logout",
    to: `/auth/logout`,
  },
];

const AccountNavs = () => {
  return (
    <nav>
      <Card elementType="section" removePadding>
        <ul className="pb-1">
          {sideNavItems.map(({ text, to, icon }) => (
            <li className="mb-6 ">
              <NavLink
                className="py-3 pl-12 flex items-center gap-4"
                activeClassName={`bg-orange-100`}
                href={to}
              >
                <span className=" text-2xl">{icon}</span>
                <span>{text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </Card>
    </nav>
  );
};

export default AccountNavs;
