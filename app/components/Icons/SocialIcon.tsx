import Link from "next/link";
import { PropsWithChildren } from "react";
import IconHolder from "./IconHolder";

const SocialIcon = ({ children }: PropsWithChildren) => {
  return (
    <IconHolder>
      <Link
        href="#"
        className="transition-colors duration-200 group-hover:text-white"
      >
        {children}
      </Link>
    </IconHolder>
  );
};

export default SocialIcon;
