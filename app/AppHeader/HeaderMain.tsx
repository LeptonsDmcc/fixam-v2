import { HambergerMenu, ShoppingCart } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "../components/Buttons/ActionButton";
import Button from "../components/Buttons/Button";
import CartButton from "../components/Buttons/CartButton";
import QuestionCircleSVGrepoCom from "../components/Icons/svgs/QuestionCircleSVGrepoCom";
import SearchInput from "../components/Inputs/SearchInput";
import MyAccountDropdown from "../components/MyAccount/MyAccountDropdown";
import CategoryNavigations from "../components/Navigations/CategoryNavigations";

const HeaderMain = () => {
  return (
    <header
      className="py-3 border-b border-cultured bg-white sticky top-0 right-0 left-0 z-50
    md:py-6"
    >
      <div
        className="wrapper flex-col gap-4 flex 
        md:justify-between md:items-center 
        md:gap-8 md:flex-row"
      >
        <header className="flex md:hidden items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/fixamlogo-b.png"
              className="opacity-80 w-12 md:w-16 
              md:m-auto"
              alt="Fixam's logo"
              width={70}
              height={70}
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/shopping-cart" className="flex items-center gap-1">
              <CartButton /> <span>Cart</span>
            </Link>
            <HambergerMenu />
          </div>
        </header>

        <CategoryNavigations heading="All Categories" isTop={true} />

        <SearchInput />

        <div className="lg:flex items-center gap-4 hidden">
          <ActionButton styles="flex items-center justify-center gap-2">
            <QuestionCircleSVGrepoCom /> Help
          </ActionButton>

          <MyAccountDropdown />

          <Link href="/shopping-cart">
            <CartButton />
          </Link>
          <Button>Sell on Fixam</Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
