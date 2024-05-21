import { CategoryType } from "../services/categories/categoryService";

const getSubcategoriesWithCategory = (categories: CategoryType[]) =>
  categories.filter((c) => c.parent !== null && c.has_subcategories);

export default getSubcategoriesWithCategory;
