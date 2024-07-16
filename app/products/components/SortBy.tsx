import { Link } from "iconsax-react";

const SortBy = () => {
  return (
    <header className="flex justify-end items-center text-xs gap-2">
      <span className="mr-2">Sort By:</span>
      <Link
        href=""
        className="border border-orange-400 text-orange-400 p-2 rounded-md"
      >
        Relevance
      </Link>
      <Link
        href=""
        className=" border border-gray-500 text-gray-500 p-2 rounded-md 
        hover:border-orange-400 hover:text-orange-400"
      >
        Price: HIgh to Low
      </Link>
      <Link
        href=""
        className=" border border-gray-500 text-gray-500 p-2 rounded-md 
        hover:border-orange-400 hover:text-orange-400"
      >
        Price: Low to High
      </Link>
    </header>
  );
};

export default SortBy;
