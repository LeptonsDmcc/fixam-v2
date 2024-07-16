import DrawerWrapper from "../DrawerWrapper";
import MobileMenuHeader from "../Navigations/MobileMenuHeader";
import SectionSpacing from "../Spacing/SectionSpacing";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

interface Props {
  onCloseMenu?: () => void;
  showMenu: boolean;
}

const MobileFilters = ({ onCloseMenu, showMenu }: Props) => {
  return (
    <DrawerWrapper showMenu={showMenu}>
      <div className="px-8 py-2">
        <MobileMenuHeader onCloseMenu={onCloseMenu} />
        <SectionSpacing />
        <FilterPrice />
        <SectionSpacing />
        <FilterRating />
      </div>
    </DrawerWrapper>
  );
};

export default MobileFilters;
