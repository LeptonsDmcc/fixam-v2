"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import AppHeader from "../AppHeader/AppHeader";

interface Props {
  component: ReactNode;
}
const AuthPageChecker = ({ component }: Props) => {
  const pathname = usePathname();
  const isAuthPage = pathname.includes("/auth");
  return <>{!isAuthPage && component}</>;
};

export default AuthPageChecker;
