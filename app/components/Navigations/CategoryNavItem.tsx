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

const CategoryNavItem = () => {
  return (
    <>
      {cats.map((cat) => (
        <li className="py-2 text-xs group">
          <Link href={""} className="hover:text-orange-400 duration-300">
            {cat}
          </Link>
        </li>
      ))}
    </>
  );
};

export default CategoryNavItem;
