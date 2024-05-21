import { IoPersonOutline } from "react-icons/io5";

import ActionButton from "../components/Buttons/ActionButton";
import Link from "next/link";
import Image from "next/image";
import CartButton from "../components/Buttons/CartButton";
import BeAVendorButton from "../components/Buttons/Button";
import SearchInput from "../components/Inputs/SearchInput";
import UserIcon from "../components/Icons/svgs/UserIcon";
import { FaChevronDown } from "react-icons/fa";
import ArrowDown from "../components/Icons/svgs/ArrowDown";
import QuestionCircleSVGrepoCom from "../components/Icons/svgs/QuestionCircleSVGrepoCom";
import IconHolder from "../components/Icons/IconHolder";
import { IoIosMenu } from "react-icons/io";
import Button from "../components/Buttons/Button";

const HeaderMain = () => {
  return (
    <div className="py-6 border-b border-cultured">
      <div className="wrapper flex justify-between items-center gap-8">
        <Link href="#">
          <Image
            src="/assets/fixamlogo-b.png"
            className="m-auto opacity-80 w-16 "
            alt="Fixam's logo"
            width={70}
            height={70}
          />
        </Link>

        <IconHolder>
          <IoIosMenu size={28} />
        </IconHolder>

        <SearchInput />

        <div className="lg:flex items-center gap-4 hidden">
          <ActionButton styles="flex items-center justify-center gap-2">
            <QuestionCircleSVGrepoCom /> Help
          </ActionButton>

          <ActionButton styles="flex items-center justify-center gap-2">
            <UserIcon /> Account <ArrowDown />
          </ActionButton>

          <CartButton />
          <Button>Be a Vendor</Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
