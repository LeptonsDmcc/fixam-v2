import Link from "next/link";
import SubCategories from "./SubCategories";

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
    <ul>
      {cats.slice(0, tempSize).map((cat, i) => (
        <li key={i} className="py-2 text-xs group">
          <Link
            href={""}
            className={`${
              isTop && " w-[148px]"
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
