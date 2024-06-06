import CollapsibleCard from "../Cards/CollapsibleCard";
import RadioInput from "../Inputs/RadioInput";

const FilterPrice = () => {
  return (
    <CollapsibleCard heading="Price">
      {[
        "Under $2000",
        "$2000 - $5000",
        "$5000 - $10000",
        "$10000 - $15000",
        "$15000 - $20000",
        "Above $20000",
      ].map((p, i) => (
        <label
          key={p}
          htmlFor={`price${i}`}
          className="flex items-center text-xs space-x-1 my-3"
        >
          <RadioInput htmlFor={`price${i}`} name="price" />
          <span className="flex-grow">{p}</span>
        </label>
      ))}
    </CollapsibleCard>
  );
};

export default FilterPrice;
