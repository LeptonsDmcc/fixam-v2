import MobileMenuHeader from "../Navigations/MobileMenuHeader";
import SectionSpacing from "../Spacing/SectionSpacing";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

interface Props {
  onCloseMenu?: () => void;
  showMenu?: boolean;
}

const MobileFilters = ({ onCloseMenu, showMenu }: Props) => {
  return (
    <section
      className={`${
        showMenu ? "w-full" : "w-0 overflow-hidden"
      }   h-screen bg-white  duration-300
      fixed top-0 bottom-0 left-0 right-0 z-50`}
    >
      <div className="px-8 py-2">
        <MobileMenuHeader onCloseMenu={onCloseMenu} />
        <SectionSpacing />
        <FilterPrice />
        <SectionSpacing />
        <FilterRating />
      </div>
    </section>
  );
};

export default MobileFilters;
