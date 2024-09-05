"use client";

import { useSearchParams } from "next/navigation";
import PaginationLink from "./PaginationLink";

interface Props {
  found: number;
}
const Pagination = ({ found }: Props) => {
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(Number(found) / 12);

  // searchParams.has("category") &&
  //   params.set("category", searchParams.get("category") || "");
  // searchParams.has("rating") &&
  //   params.set("rating", searchParams.get("rating") || "1");
  // searchParams.has("price") &&
  //   params.set("price", searchParams.get("price") || "");

  let previousPage = 1;
  let nextPage = 1;

  const page = parseInt(searchParams.get("page") || "1");

  if (pageCount > 0) {
    nextPage = page + 1;
    previousPage = nextPage - 1;
    // nextPage += 1;
  }

  return (
    <section className=" flex items-center justify-center">
      {/* <Link className="px-3" href={`${ROUTES.product}/?${params.toString()}`}>
        Previous
      </Link> */}
      <PaginationLink found={found}>Previous</PaginationLink>
      <div
        className={`${page == previousPage && "bg-orange-400 text-white"} p-3`}
      >
        {previousPage}
      </div>
      <div className={`${page == nextPage && "bg-orange-400 text-white"} p-3`}>
        {nextPage}
      </div>
      <>
        <div className="p-3">...</div>
        <div className="p-3">{pageCount}</div>
      </>

      <PaginationLink found={found} isNext={true}>
        Next
      </PaginationLink>

      {/* <Link
        href={`${ROUTES.product}/?${params.toString()}`}
        className="px-3 border border-orange-400 rounded-md py-2 hover:bg-orange-400 hover:text-white duration-200"
      >
        Next
      </Link> */}
    </section>
  );
};

export default Pagination;
