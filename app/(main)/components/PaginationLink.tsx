import { ROUTES } from "@/app/lib/contants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PropsWithChildren } from "react";

interface Props {
  found: number;
  isNext?: boolean;
}

const PaginationLink = ({
  found,
  isNext,
  children,
}: PropsWithChildren<Props>) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams();
  const pageCount = Math.ceil(Number(found) / 12);

  searchParams.has("category") &&
    params.set("category", searchParams.get("category") || "");
  searchParams.has("rating") &&
    params.set("rating", searchParams.get("rating") || "1");
  searchParams.has("price") &&
    params.set("price", searchParams.get("price") || "");

  let previousPage = 1;
  let nextPage = 1;

  const page = parseInt(searchParams.get("page") || "1");

  if (pageCount > 0) {
    nextPage = isNext ? page + 1 : page - 1;
    previousPage = isNext ? nextPage - 1 : nextPage + 1;
    // nextPage += 1;
  }

  if (pageCount != page || !isNext) {
    // nextPage = page + 1;
    // previousPage = nextPage - 1;
    // nextPage += 1;
    params.set("page", nextPage.toString());
  }

  if (!isNext && nextPage == 0)
    return (
      <span className="px-3 opacity-70 cursor-not-allowed">{children}</span>
    );
  return (
    <Link
      href={`${ROUTES.product}/?${params.toString()}`}
      className={`${
        isNext
          ? "border border-orange-400 rounded-md py-2 hover:bg-orange-400 hover:text-white duration-200"
          : ""
      } px-3`}
    >
      {children}
    </Link>
  );
};

export default PaginationLink;
