import Link from "next/link";
import BarButton from "../Buttons/BarButton";
import Space from "../Space";
import MainCategoryNavItems from "../Navigations/MainCategoryNavItems";

const BrowseCategories = () => {
  return (
    <section className="bg-white rounded-lg p-4 shadow-md">
      <header className="flex justify-between items-center">
        <p className=" font-semibold text-gray-900">Browse Categories</p>
        {/* <BarButton /> */}
      </header>
      <Space spacing="my-5" />
      <MainCategoryNavItems />
    </section>
  );
};

export default BrowseCategories;
