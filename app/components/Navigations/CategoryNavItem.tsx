import { ROUTES } from "@/app/lib/contants";
import { LinkType } from "@/app/lib/types";
import Link from "next/link";

const cats = [
  "Home Appliances",
  "Television",
  "Camera and Photo",
  "Home Appliances",
  "Television",
  "Camera and Photo",
  "Home Appliances",
  "Television",
];

interface Props {
  previousRoute?: string;
}
const CategoryNavItem = ({ previousRoute }: Props) => {
  return (
    <>
      {cats.map((cat, i) => (
        <li key={i} className="py-2 text-xs group">
          <Link
            href={`${ROUTES.product}/${
              previousRoute
                ? previousRoute.toLowerCase() + "/" + cat.toLowerCase()
                : cat.toLowerCase()
            }`}
            className="hover:text-orange-400 duration-300"
          >
            {cat}
          </Link>
        </li>
      ))}
    </>
  );
};

export default CategoryNavItem;
