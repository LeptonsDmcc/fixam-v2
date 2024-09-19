import fetchRootCategories from "@/app/(main)/services/categories/fetchRootCategories";
import SidebarMenuCategory from "./SidebarMenuCategory";
import capitalize from "@/app/lib/capitalize";

const SidebarSubMenuCategoryList = async () => {
  const rootCategories = await fetchRootCategories();

  return (
    <ul className="sidebar-menu-category-list">
      {rootCategories.map(({ id, name }) => (
        <SidebarMenuCategory
          key={id}
          categoryId={id}
          categoryName={capitalize(name)}
        />
      ))}
    </ul>
  );
};

export default SidebarSubMenuCategoryList;
