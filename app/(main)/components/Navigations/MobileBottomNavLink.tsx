"use client";

import React from "react";
import ActionButton from "../Buttons/ActionButton";
import { LinkType } from "@/app/lib/types";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface Props extends LinkType {}

const MobileBottomNavLink = ({ to, icon, text }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <Link href={to}>
      <ActionButton isMobile styles={`${isActive && "text-orange-400"}`}>
        <div className="flex flex-col items-center justify-center">
          {icon}
          <p className="text-xs">{text}</p>
        </div>
      </ActionButton>
    </Link>
  );
};

export default MobileBottomNavLink;
