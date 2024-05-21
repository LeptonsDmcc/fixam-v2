import { CategoryType } from "../services/categories/categoryService";

const getCategoriesWithProduct = (categories: CategoryType[]) =>
  categories.filter((c) => c.products);

export default getCategoriesWithProduct;
