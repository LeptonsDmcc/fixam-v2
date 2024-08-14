import { CategoryType } from "@/app/lib/types";
import CategoryLink from "./CategoryLink";
import SubCategories from "./SubCategories";

interface Props {
  isTopNav?: boolean;
  tempSize?: number;
  onClick?: (category: string) => void;
}

const MainCategoryNavItems = async ({ isTopNav, onClick }: Props) => {
  let categories: CategoryType[] = [];

  try {
    const categoriesRes = await fetch(
      `${process.env.FIXAM_BASE_URL}/products/categories/root_categories/`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!categoriesRes.ok) {
      throw new Error("Something went wrong");
    }

    categories = await categoriesRes.json();
  } catch (error) {
    console.log("Main Categories Failed", error);
    throw error;
  }

  if (categories.length)
    return (
      <ul className="z-50">
        {categories.map(({ name, slug, id }) => (
          <li key={name} className="py-2 text-xs group/item">
            <CategoryLink name={name} slug={slug} isTopNav={isTopNav} />
            <SubCategories categoryId={id} />
          </li>
        ))}
      </ul>
    );
};

export default MainCategoryNavItems;
