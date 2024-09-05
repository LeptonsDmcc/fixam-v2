import { ROUTES } from "@/app/lib/contants";
import { LinkType } from "@/app/lib/types";
import { HiOutlineLogout } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHeart } from "react-icons/rx";
import { logout } from "@/actions/auth";
import NavLink from "@/app/components/Navigations/NavLink";
import Card from "@/app/components/Card";

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
];

const AccountNavs = () => {
  return (
    <nav>
      <Card elementType="section" removePadding>
        <ul className="pb-1">
          {sideNavItems.map(({ text, to, icon }) => (
            <li key={text} className="mb-6 ">
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
          <form action={logout} className="py-3 pl-12 flex items-center gap-4">
            <span className=" text-2xl">
              <HiOutlineLogout className=" rotate-180" />
            </span>
            <button>Logout</button>
          </form>
        </ul>
      </Card>
    </nav>
  );
};

export default AccountNavs;
