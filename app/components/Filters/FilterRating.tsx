import ShowcaseRating from "../Reviews/ShowcaseRating";
import CollapsibleCard from "../Cards/CollapsibleCard";
import RadioInput from "../Inputs/RadioInput";
import FilterLink from "./FilterLink";

const FilterRating = () => {
  return (
    <CollapsibleCard heading="Rating">
      {[5, 4, 3, 2, 1].map((rating) => (
        <FilterLink
          key={rating}
          filter={{ key: "rating", value: rating.toString() }}
          label={<ShowcaseRating rating={rating} />}
        />
      ))}
    </CollapsibleCard>
  );
};

export default FilterRating;
