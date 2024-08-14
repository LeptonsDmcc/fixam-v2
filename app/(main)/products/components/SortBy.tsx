import FilterLink from "@/app/components/Filters/FilterLink";

const SortBy = () => {
  return (
    <header
      className="hidden justify-end items-center text-xs gap-2
            lg:flex"
    >
      <span className="mr-2">Sort By:</span>
      <FilterLink
        filter={{ key: "sort_by", value: "relevance" }}
        label="Relevance"
        isSortFilter
      />

      <FilterLink
        filter={{ key: "sort_by", value: "price:desc" }}
        label="Price: High to Low"
        isSortFilter
      />

      <FilterLink
        filter={{ key: "sort_by", value: "price:asc" }}
        label="Price: Low to High"
        isSortFilter
      />
    </header>
  );
};

export default SortBy;
