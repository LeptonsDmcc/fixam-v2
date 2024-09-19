import getCategoriesWithProduct from "@/app/lib/getCategoriesWithProduct";
import SidebarMenuCategoryContainer from "./SidebarMenuCategoryContainer";
import SidebarSubMenuCategoryItems from "./SidebarSubMenuCategoryItems";
import fetchSubcategories from "@/app/(main)/services/categories/fetchSubcategories";

interface Props {
  categoryId: string;
  categoryName: string;
}

const SidebarMenuCategory = async ({ categoryId, categoryName }: Props) => {
  const subCategories = await fetchSubcategories(categoryId);

  // TODO: DEBUG
  return (
    <SidebarMenuCategoryContainer categoryName={categoryName}>
      <SidebarSubMenuCategoryItems
        subCategories={getCategoriesWithProduct([])}
      />
    </SidebarMenuCategoryContainer>
  );
};

export default SidebarMenuCategory;
