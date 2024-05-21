import { CategoryType } from "@/app/services/categories/categoryService";
import Link from "next/dist/client/link";

interface Props {
  subCategories: CategoryType[];
}

const SidebarSubMenuCategoryItems = ({ subCategories }: Props) => {
  return (
    <>
      {subCategories.map(({ name, products }) => (
        <li key={name} className="sidebar-submenu-category">
          <Link
            href="#"
            className="sidebar-submenu-title
        flex justify-between items-center text-gray-400 text-sm
        py-[2px] px-0
        
        hover:text-gray-800"
          >
            <p
              className="product-name
          
          capitalize"
            >
              {name}
            </p>
            <data value="62" className="stock" title="Available Stock">
              {products}
            </data>
          </Link>
        </li>
      ))}
    </>
  );
};

export default SidebarSubMenuCategoryItems;
