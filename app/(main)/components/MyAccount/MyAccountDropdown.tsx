"use client";

import { ROUTES } from "@/app/lib/contants";
import { LinkType } from "@/app/lib/types";
import { ArrowDown2, GlobalSearch, User } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHeart } from "react-icons/rx";
import ActionButton from "../Buttons/ActionButton";
import Button from "../Buttons/Button";
import Space from "../Spacing/Space";

const myAccountNavs: LinkType[] = [
  {
    icon: <IoPersonOutline />,
    text: "Account",
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
    icon: <GlobalSearch />,
    text: "Tracking",
    to: "/order/track",
  },
];

const MyAccountDropdown = () => {
  const [isVisible, setIsVisibility] = useState(false);

  const handleDropdownVisibility = () => {
    setIsVisibility(!isVisible);
  };
  return (
    <section className="relative">
      <ActionButton
        onClick={handleDropdownVisibility}
        styles="flex items-center justify-center gap-2"
      >
        <User /> Account <ArrowDown2 />
      </ActionButton>

      <nav
        className={`${isVisible ? " block" : " hidden"} 
        border absolute max-w-[182px] top-[150%] left-1/2 -translate-x-1/2  w-[182px] 
        bg-white shadow-md flex justify-center py-6 rounded-md`}
      >
        <ul role="menu" className="  flex flex-col ">
          <li>
            <Button elementType="link" href="/signin">
              Sign In
            </Button>
          </li>
          <Space spacing={"my-2"} />
          {myAccountNavs.map(({ text, to, icon }) => (
            <li key={text} className="py-3">
              <Link
                href={to}
                className="flex gap-2 items-center hover:text-orange-400 duration-200"
              >
                <span className=" text-2xl">{icon}</span> <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default MyAccountDropdown;
