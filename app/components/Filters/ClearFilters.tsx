"use client";

import { ROUTES } from "@/app/lib/contants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ClearFilters = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams();

  searchParams.has("category") &&
    params.set("category", searchParams.get("category") || "");

  return (
    <div>
      <Link
        href={`${ROUTES.product}/?${params.toString()}`}
        className="text-orange-400 font-semibold"
      >
        Clear Filters
      </Link>
    </div>
  );
};

export default ClearFilters;
