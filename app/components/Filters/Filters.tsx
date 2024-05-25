import Space from "../Space";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

const Filters = () => {
  return (
    <section>
      <FilterPrice />
      <Space spacing="my-6" />
      <FilterRating />
    </section>
  );
};

export default Filters;
