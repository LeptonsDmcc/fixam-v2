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
    <header className="py-6 border-b border-cultured bg-white sticky top-0 right-0 left-0 z-50">
      <div className="wrapper flex justify-between items-center gap-8">
        <Link href="/">
          <Image
            src="/assets/fixamlogo-b.png"
            className="m-auto opacity-80 w-16 "
            alt="Fixam's logo"
            width={70}
            height={70}
          />
        </Link>

        <CategoryNavigations heading="All Categories" isTop={true} />

        <SearchInput />

        <div className="lg:flex items-center gap-4 hidden">
          <ActionButton styles="flex items-center justify-center gap-2">
            <QuestionCircleSVGrepoCom /> Help
          </ActionButton>

          <MyAccountDropdown />

          <Link href="/cart">
            <CartButton />
          </Link>
          <Button>Be a Vendor</Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
