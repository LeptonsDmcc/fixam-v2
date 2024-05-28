"use client";
import { usePathname } from "next/navigation";
import React from "react";
import AppHeader from "../AppHeader/AppHeader";

const AuthPageChecker = () => {
  const pathname = usePathname();
  const isAuthPage = pathname.includes("/auth");
  return <>{!isAuthPage && <AppHeader />}</>;
};

export default AuthPageChecker;
