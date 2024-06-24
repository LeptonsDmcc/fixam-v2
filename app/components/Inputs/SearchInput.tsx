import { SearchNormal } from "iconsax-react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="min-w-full md:min-w-[300px] relative flex-grow">
      <input
        type="search"
        name="search"
        className="search-field text-sm text-gray-500 py-3 px-4 border
             border-cultured rounded-md pl-[60px] focus:outline-none placeholder:text-gray-500"
        placeholder="Search for your product here"
      />
      <button
        className=" absolute top-1/2 -translate-y-1/2 left-1
            text-gray-500 text-[24px] py-[8px] px-[15px] rounded-md"
      >
        <SearchNormal className="hover:text-orange-400 transition duration-200" />
      </button>
    </div>
  );
};

export default SearchInput;
