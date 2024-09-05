import Link from "next/link";
import HamburgerMenuTrigger from "./HamburgerMenuTrigger";
import Logo from "@/app/components/Logo";
import CartButton from "@/app/components/Buttons/CartButton";
import CategoryNavigations from "@/app/components/Navigations/CategoryNavigations";
import SearchInput from "@/app/components/Inputs/SearchInput";
import ActionButton from "@/app/components/Buttons/ActionButton";
import QuestionCircleSVGrepoCom from "@/app/components/Icons/svgs/QuestionCircleSVGrepoCom";
import MyAccountDropdown from "@/app/components/MyAccount/MyAccountDropdown";
import Button from "@/app/components/Buttons/Button";

interface Props {
  isAuthenticated?: boolean;
}

const HeaderMain = ({ isAuthenticated }: Props) => {
  return (
    <header
      className="py-3 border-b border-cultured bg-white 
      sticky top-0 right-0 left-0 z-30
      lg:py-6"
    >
      <div
        className="wrapper flex-col gap-4 flex 
        lg:justify-between lg:items-center 
        lg:gap-8 lg:flex-row"
      >
        <Link href="/" className="hidden lg:block">
          <Logo />
        </Link>
        <header
          className="flex items-center justify-between
          lg:hidden"
        >
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
        <CategoryNavigations heading="All Categories" isTopNav={true} />

        <SearchInput />

        <div className="lg:flex items-center gap-4 hidden">
          <ActionButton styles="flex items-center justify-center gap-2">
            <QuestionCircleSVGrepoCom /> Help
          </ActionButton>

          <MyAccountDropdown isAuthenticated={isAuthenticated} />

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
