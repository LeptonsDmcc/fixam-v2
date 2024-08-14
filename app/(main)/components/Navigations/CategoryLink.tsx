"use client";

import capitalize from "@/app/lib/capitalize";
import { ROUTES } from "@/app/lib/contants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  name: string;
  slug: string;
  isTopNav?: boolean;
}

function CategoryLink({ name, slug, isTopNav }: Props) {
  const searchParams = useSearchParams();

  const params = new URLSearchParams();
  searchParams.has("price") &&
    params.set("price", searchParams.get("price") || "");
  searchParams.has("rating") &&
    params.set("rating", searchParams.get("rating") || "1");

  params.set("category", slug);

  const isActiveFilter = searchParams
    .toString()
    .toLowerCase()
    ?.includes(`category=${slug.toLowerCase()}`);

  return (
    <Link
      href={`${ROUTES.product}/?${params.toString()}`}
      className={`${isTopNav && "w-[148px]"} ${
        isActiveFilter ? "text-orange-400" : "text-gray-800"
      } 
      m-auto hover:text-orange-400 duration-300`}
    >
      {capitalize(name)}
    </Link>
  );
}

export default CategoryLink;
