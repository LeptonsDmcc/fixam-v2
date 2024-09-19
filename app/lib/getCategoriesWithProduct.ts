import { CategoryType } from "@/app/lib/types";

const getCategoriesWithProduct = (categories: CategoryType[]) =>
  categories.filter((c) => c.products);

export default getCategoriesWithProduct;
