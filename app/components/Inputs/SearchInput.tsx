"use client";

import { SearchNormal } from "iconsax-react";
import SearchedProducts from "./SearchedProducts";
import { KeyboardEvent, useState } from "react";
import SearchedCategories from "./SearchedCategories";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/products/search?q=${searchValue}`, { scroll: true });
    }
  };

  return (
    <div
      className="min-w-full relative flex-grow
      lg:min-w-[300px]"
    >
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyUp={handleKeyUp}
        value={searchValue}
        autoComplete="off"
        type="search"
        name="search"
        className="peer search-field text-sm text-gray-500 py-3 px-4 border
             border-cultured rounded-md pl-[60px] focus:outline-none placeholder:text-gray-500"
        placeholder="Search for your product here"
      />
      <button
        className=" absolute top-1/2 -translate-y-1/2 left-1
            text-gray-500 text-[24px] py-[8px] px-[15px] rounded-md"
      >
        <SearchNormal className="hover:text-orange-400 transition duration-200" />
      </button>

      <section
        className="peer-focus:block hidden max-h-[300px] w-full bg-white absolute left-0 right-0 top-full
       rounded-b-lg shadow-10-01 overflow-y-auto has-scrollbar"
      >
        <SearchedCategories searchTerm={searchValue} />
        <SearchedProducts searchTerm={searchValue} />
      </section>
    </div>
  );
};

export default SearchInput;
