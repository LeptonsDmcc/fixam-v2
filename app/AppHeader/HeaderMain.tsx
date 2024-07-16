import Link from "next/link";
import ActionButton from "../components/Buttons/ActionButton";
import Button from "../components/Buttons/Button";
import CartButton from "../components/Buttons/CartButton";
import QuestionCircleSVGrepoCom from "../components/Icons/svgs/QuestionCircleSVGrepoCom";
import SearchInput from "../components/Inputs/SearchInput";
import Logo from "../components/Logo";
import MyAccountDropdown from "../components/MyAccount/MyAccountDropdown";
import CategoryNavigations from "../components/Navigations/CategoryNavigations";
import HamburgerMenuTrigger from "./HamburgerMenuTrigger";

const HeaderMain = () => {
  return (
    <header
      className="py-3 border-b border-cultured bg-white 
      sticky top-0 right-0 left-0 z-[39]
    md:py-6"
    >
      <div
        className="wrapper flex-col gap-4 flex 
        md:justify-between md:items-center 
        md:gap-8 md:flex-row"
      >
        <header className="flex md:hidden items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/shopping-cart" className="flex items-center gap-1">
              <CartButton /> <span>Cart</span>
            </Link>
            <HamburgerMenuTrigger />
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
