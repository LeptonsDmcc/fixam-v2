import SidebarTop from "./SidebarTop";
import SidebarMenuCategory from "./SidebarMenuCategory";
import ProductBestSellers from "../Products/ProductBestSellers";
import fetchRootCategories from "@/app/services/categories/fetchRootCategories";
import SidebarContainer from "./SidebarContainer";
import SidebarSubMenuCategoryList from "./SidebarSubMenuCategoryList";

const Sidebar = async () => {
  return (
    <SidebarContainer>
      <div
        className="sidebar-category
      mb-[15px] pb-[15px] border-b border-cultured

      lg:p-[20px] lg:mb-[30px] lg:border lg:border-cultured lg:rounded-md
      "
      >
        <SidebarTop />
        <SidebarSubMenuCategoryList />
      </div>
      <ProductBestSellers />
    </SidebarContainer>
  );
};

export default Sidebar;
