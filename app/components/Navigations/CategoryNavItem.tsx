import { CategoryType } from "@/app/lib/types";
import CategoryLink from "./CategoryLink";

interface Props {
  categoryId: string;
  isTopNav?: boolean;
}

const CategoryNavItem = async ({ categoryId, isTopNav }: Props) => {
  let categories: CategoryType[] = [];
  try {
    const categoriesRes = await fetch(
      `${process.env.FIXAM_BASE_URL}/products/categories/${categoryId}/subcategories/`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!categoriesRes.ok) {
      throw new Error("Something went wrong");
    }

    categories = await categoriesRes.json();
  } catch (error) {
    console.log("FAILED TO FETCH CATEGORY NAV ITEMS", error);
    throw error;
  }

  return (
    <>
      {categories.map(({ name, slug }) => (
        <li key={name} className="py-2 text-xs group">
          <CategoryLink name={name} slug={slug} isTopNav={isTopNav} />
        </li>
      ))}
    </>
  );
};

export default CategoryNavItem;
