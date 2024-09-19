import { getRandomUniqueElements } from "@/app/lib/randomValues";
import getCategoriesWithProduct from "@/app/lib/getCategoriesWithProduct";
import CategoryItem from "./CategoryItem";
import fetchCategories from "@/app/(main)/services/categories/fetchCategories";

const Category = async () => {
  // const categories = await fetchCategories();

  // const get10RandomCategories = getRandomUniqueElements(
  //   getCategoriesWithProduct([categories]),
  //   10
  // );

  // return (
  //   <div
  //     className="category
  //     mb-[30px]
  //   "
  //   >
  //     <div className="wrapper">
  //       <div
  //         className="category-item-container
  //       has-scrollbar

  //       flex items-center gap-[10px]
  //       overflow-x-auto overflow-y-hidden
  //       scroll-x-behavior

  //       md:gap-[30px]
  //       "
  //       >
  //         {get10RandomCategories.map((category) => (
  //           <CategoryItem key={category.id} category={category} />
  //         ))}
  //       </div>
  //     </div>
  //   </div> );
  return <></>;
};

export default Category;
