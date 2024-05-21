import Link from "next/link";
import BarButton from "../Buttons/BarButton";
import Space from "../Space";

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

const BrowseCategories = () => {
  return (
    <section className="bg-white rounded-lg p-4 shadow-md">
      <header className="flex justify-between items-center">
        <p className=" font-semibold text-gray-900">Browse Categories</p>
        <BarButton />
      </header>
      <Space spacing="my-5" />
      <ul>
        {cats.map((cat) => (
          <li className=" my-4 text-xs">
            <Link href={""} className=" hover:text-orange-400 duration-300">
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BrowseCategories;
