import { useState } from "react";
import SidebarAccordionMenu from "./SidebarAccordionMenu";
import SidebarSubMenuCategoryItems from "./SidebarSubMenuCategoryItems";
import SidebarMenuCategoryContainer from "./SidebarMenuCategoryContainer";
import fetchSubcategories from "@/app/services/categories/fetchSubcategories";
import getCategoriesWithProduct from "@/app/lib/getCategoriesWithProduct";

interface Props {
  categoryId: string;
  categoryName: string;
}

const SidebarMenuCategory = async ({ categoryId, categoryName }: Props) => {
  const subCategories = await fetchSubcategories(categoryId);

  return (
    <SidebarMenuCategoryContainer categoryName={categoryName}>
      <SidebarSubMenuCategoryItems
        subCategories={getCategoriesWithProduct(subCategories)}
      />
    </SidebarMenuCategoryContainer>
  );
};

export default SidebarMenuCategory;
