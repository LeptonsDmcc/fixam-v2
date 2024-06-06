"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
  className?: string;
}

const NavLink = ({
  href,
  children,
  activeClassName,
  className,
  ...rest
}: PropsWithChildren<NavLinkProps>) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const combinedClassName = isActive
    ? `${className ? className : ""} ${activeClassName}`.trim()
    : className || "";

  return (
    <Link href={href} {...rest} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default NavLink;
