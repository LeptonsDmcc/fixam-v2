import Link from "next/link";
import Image from "next/image";
import { CategoryType } from "@/app/lib/types";

interface Props {
  category: CategoryType;
}

const CategoryItem = ({ category }: Props) => {
  return (
    <div
      className="category-item
    
    min-w-full flex items-center gap-[10px] p-[15px] border border-cultured
    rounded-md scroll-snap-align-start

    md:min-w-[calc(50%-15px)]
    lg:min-w-[calc(25%-22.5px)]"
    >
      <div
        className="category-img-box
      
      bg-cultured border border-[hsl(0, 0%, 80%)] p-[10px]
       rounded-sm
       
       md:p-5 lg:p-[10px]"
      >
        <Image
          height={30}
          width={30}
          src="/assets/icons/categories.png"
          alt="watch"
        />
      </div>

      <div
        className="category-content-box
          w-full
        "
      >
        <div
          className="category-content-flex
          flex justify-between items-center mb-[10px]
          "
        >
          <h3
            className="category-item-title
          
          text-gray-800 text-sm font-semibold uppercase

          lg:text-[0.824rem]
          "
          >
            {category.name}
          </h3>

          <p
            className="category-item-amount
          
          text-gray-400 text-xs
          "
          >
            ({category.products})
          </p>
        </div>

        <Link
          href="#"
          className="category-btn
        
        text-orange-500 text-sm font-medium capitalize
        "
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
