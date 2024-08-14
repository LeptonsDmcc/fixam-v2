"use client";

import Link from "next/link";
import RadioIndicator from "./RadioIndicator";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import { ROUTES } from "@/app/lib/contants";

interface Props {
  filter: { key: string; value: string };
  label?: ReactNode;
  isSortFilter?: boolean;
}

const FilterLink = ({ isSortFilter, filter, label }: Props) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams();

  searchParams.has("category") &&
    params.set("category", searchParams.get("category") || "");
  searchParams.has("rating") &&
    params.set("rating", searchParams.get("rating") || "1");
  searchParams.has("price") &&
    params.set("price", searchParams.get("price") || "");
  params.set(filter.key, filter.value.toString());

  const isActiveFilter = searchParams
    .toString()
    .toLowerCase()
    ?.includes(`${filter.key}=${decodeURIComponent(filter.value)}`);

  // Check if the component is sort and generate a different Link style
  if (isSortFilter)
    return (
      <Link
        href={`${ROUTES.product}/?${params.toString()}`}
        className={`${
          isActiveFilter
            ? "border-orange-400 text-orange-400"
            : "border-gray-800 text-gray-800"
        } border p-2 rounded-md hover:border-orange-400 hover:text-orange-400`}
      >
        {label}
      </Link>
    );

  return (
    <div className="flex items-center text-xs space-x-1 my-3">
      <RadioIndicator shouldIndicate={isActiveFilter} />
      <Link
        scroll={true}
        href={`${ROUTES.product}/?${params.toString()}`}
        className={`${isActiveFilter ? "text-orange-400" : " text-gray-800"}`}
      >
        {label && <span className="flex-grow">{label}</span>}
      </Link>
    </div>
  );
};

export default FilterLink;
