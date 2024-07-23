import capitalize from "@/app/lib/capitalize";
import { ROUTES } from "@/app/lib/contants";
import { CategoryType } from "@/app/lib/types";
import Link from "next/link";

interface Props {
  previousRoute?: string;
  categoryId: string;
}

const CategoryNavItem = async ({ categoryId, previousRoute }: Props) => {
  const categoriesRes = await fetch(
    `${process.env.FIXAM_BASE_URL}/products/categories/${categoryId}/subcategories/`,
    {
      cache: "no-store",
    }
  );

  const categories: CategoryType[] = await categoriesRes.json();

  return (
    <>
      {categories.map(({ name, slug }) => (
        <li key={name} className="py-2 text-xs group">
          <Link
            href={`${ROUTES.product}/${
              previousRoute
                ? previousRoute.toLowerCase() + "/" + slug.toLowerCase()
                : slug.toLowerCase()
            }`}
            className="hover:text-orange-400 duration-300"
          >
            {capitalize(name)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default CategoryNavItem;
