import currency from "@/app/lib/currency";
import CollapsibleCard from "../Cards/CollapsibleCard";
import FilterLink from "./FilterLink";

const FilterPrice = () => {
  return (
    <CollapsibleCard heading="Price">
      {[
        {
          label: `Under ${currency()}2000`,
          value: "<2000",
        },
        {
          label: `${currency()}2000 -  ${currency()}5000`,
          value: "2000..5000",
        },
        {
          label: `${currency()}5000 -  ${currency()}10000`,
          value: "5000..10000",
        },
        {
          label: `${currency()}10000 -  ${currency()}15000`,
          value: "10000..15000",
        },
        {
          label: `${currency()}15000 -  ${currency()}20000`,
          value: "15000..20000",
        },
        {
          label: `Above  ${currency()}20000`,
          value: ">20000",
        },
      ].map((p) => {
        return (
          <FilterLink
            key={p.value}
            filter={{ key: "price", value: p.value }}
            label={p.label}
          />
        );
      })}
    </CollapsibleCard>
  );
};

export default FilterPrice;
