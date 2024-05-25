import Link from "next/link";
import SubCategories from "./SubCategories";
import { ROUTES } from "@/app/lib/contants";

const cats = [
  "Home Appliances",
  "Television",
  "Camera and Photo",
  "Home Appliances",
  "Television",
  "Camera and Photo",
  "Home Appliances",
  "Television",
  "Camera and Photo",
];

interface Props {
  isTop?: boolean;
  tempSize?: number;
}
const MainCategoryNavItems = ({ tempSize = 9, isTop }: Props) => {
  return (
    <ul className=" z-50">
      {cats.slice(0, tempSize).map((cat, i) => (
        <li key={cat + i} className="py-2 text-xs group">
          <Link
            href={`${ROUTES.product}/${cat.toLowerCase()}`}
            className={`${
              isTop && "w-[148px]"
            } m-auto hover:text-orange-400 duration-300`}
          >
            {cat}
          </Link>
          <SubCategories categoryId={cat} />
        </li>
      ))}
    </ul>
  );
};

export default MainCategoryNavItems;
