import Link from "next/link";
import SubCategories from "./SubCategories";
import { ROUTES } from "@/app/lib/contants";
import capitalize from "@/app/lib/capitalize";
import { CategoryType } from "@/app/lib/types";

interface Props {
  isTop?: boolean;
  tempSize?: number;
}

const MainCategoryNavItems = async ({ isTop }: Props) => {
  const categoriesRes = await fetch(
    `${process.env.FIXAM_BASE_URL}/products/categories/`,
    {
      cache: "no-store",
    }
  );

  const categories: CategoryType[] = await categoriesRes.json();

  return (
    <ul className=" z-50">
      {categories
        .filter(({ parent }) => parent === null)
        .map(({ name, id, slug }) => (
          <li key={name} className="py-2 text-xs group/item">
            <Link
              href={`${ROUTES.product}/${slug}`}
              className={`${
                isTop && "w-[148px]"
              } m-auto hover:text-orange-400 duration-300`}
            >
              {capitalize(name)}
            </Link>
            <SubCategories categorySlug={slug} categoryId={id} />
          </li>
        ))}
    </ul>
  );
};

export default MainCategoryNavItems;
