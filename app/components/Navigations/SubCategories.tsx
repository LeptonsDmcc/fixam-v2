import capitalize from "@/app/lib/capitalize";
import CategoryNavItem from "./CategoryNavItem";
import { CategoryType } from "@/app/lib/types";

interface Props {
  categoryId: string;
  categorySlug: string;
}
const SubCategories = async ({ categoryId, categorySlug }: Props) => {
  const categoriesRes = await fetch(
    `${process.env.FIXAM_BASE_URL}/products/categories/${categoryId}/subcategories/`,
    {
      cache: "no-store",
    }
  );

  const categories: CategoryType[] = await categoriesRes.json();

  return (
    <ul
      className="absolute left-full top-0 bottom-0 rounded-lg bg-white border border-gray-200 
      has-scrollbar overflow-y-auto py-6 px-4  flex-wrap gap-x-4 gap-y-8 max-w-[696px] w-[696px]
       hidden group-hover/item:flex"
    >
      {categories.map(({ name, id, slug }) => (
        <li key={name} className="max-w-[178px] flex-grow ">
          <h4 className="text-xs font-semibold border-b border-gray-300 pb-1">
            {capitalize(name)}
          </h4>
          <ul>
            <CategoryNavItem
              categoryId={id}
              previousRoute={categorySlug + "/" + slug}
            />
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default SubCategories;
