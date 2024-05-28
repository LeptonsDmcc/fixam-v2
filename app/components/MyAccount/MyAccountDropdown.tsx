"use client";

import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHeart } from "react-icons/rx";
import Button from "../Buttons/Button";
import Space from "../Space";
import ActionButton from "../Buttons/ActionButton";
import UserIcon from "../Icons/svgs/UserIcon";
import ArrowDown from "../Icons/svgs/ArrowDown";
import { useState } from "react";

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
        <UserIcon /> Account <ArrowDown />
      </ActionButton>

      <nav
        className={`${isVisible ? " block" : " hidden"} 
        border absolute max-w-[182px] top-[150%] left-1/2 -translate-x-1/2  w-[182px] 
        bg-white shadow-md flex justify-center py-6 rounded-md`}
      >
        <ul role="menu" className="  flex flex-col ">
          <li>
            <Button elementType="link" href="/auth/signin">
              Sign In
            </Button>
          </li>
          <Space spacing={"my-2"} />
          <li className="py-3">
            <Link
              href={""}
              className="flex gap-2 items-center hover:text-orange-400 duration-200"
            >
              <IoPersonOutline size={24} /> <span>Account</span>
            </Link>
          </li>
          <li className="py-3">
            <Link
              href={""}
              className="flex gap-2 items-center hover:text-orange-400 duration-200"
            >
              <LiaShoppingBagSolid size={24} /> <span>Order</span>
            </Link>
          </li>
          <li className="py-3">
            <Link
              href={""}
              className="flex gap-2 items-center hover:text-orange-400 duration-200"
            >
              <RxHeart size={24} /> <span>Save Items</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MyAccountDropdown;
