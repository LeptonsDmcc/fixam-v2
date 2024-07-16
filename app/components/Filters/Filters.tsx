import Space from "../Spacing/Space";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

const Filters = () => {
  return (
    <section
      className="hidden 
    md:block"
    >
      <FilterPrice />
      <Space spacing="my-6" />
      <FilterRating />
    </section>
  );
};

export default Filters;
