import ShowcaseRating from "../Reviews/ShowcaseRating";
import CollapsibleCard from "../Cards/CollapsibleCard";
import RadioInput from "../Inputs/RadioInput";

const FilterRating = () => {
  return (
    <CollapsibleCard heading="Rating">
      {[1, 2, 3, 4, 5].map((p, i) => (
        <label
          key={p}
          htmlFor={`rating${i}`}
          className="flex items-center text-xs space-x-1 my-3"
        >
          <RadioInput htmlFor={`rating${i}`} name="rating" />
          <ShowcaseRating />
        </label>
      ))}
    </CollapsibleCard>
  );
};

export default FilterRating;
