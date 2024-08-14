import BrowseCategories from "../Categories/BrowseCategories";
import Space from "../Spacing/Space";
import ClearFilters from "./ClearFilters";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

const Filters = () => {
  return (
    <section
      className="hidden 
      md:block"
    >
      <BrowseCategories isCollapsible={true} />
      <Space spacing="my-6" />
      <FilterPrice />
      <Space spacing="my-6" />
      <FilterRating />
      <Space spacing="my-6" />
      <ClearFilters />
    </section>
  );
};

export default Filters;
