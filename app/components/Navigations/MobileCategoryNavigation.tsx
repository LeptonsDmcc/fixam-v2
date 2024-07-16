import { ArrowLeft, ArrowRight2 } from "iconsax-react";
import { useEffect, useState } from "react";
import SectionSpacing from "../Spacing/SectionSpacing";
import MobileMenuHeader from "./MobileMenuHeader";
import Link from "next/link";
import DrawerWrapper from "../DrawerWrapper";

interface Props {
  showCategory: boolean;
  onCloseCategory: () => void;
}

const mainCategories = [
  [
    "Home Appliances",
    "Television",
    "Camera and Photo",
    "Office Electronics",
    "Building Materials",
    "Cars & Vehicles",
    "Furniture's",
    "Dvd Player and Recorder",
    "Surveillance & Security ",
  ],
  [
    "Kitchen Appliances",
    "Laundry Appliances",
    "Climate Control Appliances",
    "Personal Care Appliances",
    "Cleaning Appliances",
    "Entertainment and Connectivity",
    "Furniture's",
  ],

  [
    "Refrigerator",
    "Ovens",
    "Microwaves",
    "Dishwashers",
    "Coffee Makers",
    "Blenders",
  ],
];

const MobileCategoryNavigation = ({ showCategory, onCloseCategory }: Props) => {
  const [categories, setCategories] = useState(mainCategories);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (currentIndex >= categories.length) return;

  return (
    <DrawerWrapper showMenu={showCategory}>
      <div className="px-4 py-6">
        <MobileMenuHeader onCloseMenu={onCloseCategory} />
        <SectionSpacing />
        <p className=" font-semibold flex items-center gap-2">
          {currentIndex > 0 && (
            <ArrowLeft
              onClick={() => {
                setCurrentIndex(currentIndex - 1);
              }}
            />
          )}
          <span>Categories</span>
        </p>
        <SectionSpacing />
        <ul className="px-2">
          {categories[currentIndex].map((category) => (
            <li
              onClick={() => setCurrentIndex(currentIndex + 1)}
              key={category}
              className="my-8"
            >
              {currentIndex >= categories.length - 1 ? (
                <Link
                  href={`/products/${category}`}
                  className="flex items-center justify-between"
                >
                  <span>{category}</span> <ArrowRight2 />
                </Link>
              ) : (
                <p className="flex items-center justify-between">
                  <span>{category}</span> <ArrowRight2 />
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </DrawerWrapper>
  );
};

export default MobileCategoryNavigation;
