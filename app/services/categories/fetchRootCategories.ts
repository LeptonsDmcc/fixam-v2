import { CategoryType, categoryService } from "./categoryService";

const fetchRootCategories = async () => {
  const rootCategories: CategoryType[] = (await categoryService.getAll(
    "root_categories/"
  )) as CategoryType[];
  return rootCategories;
};

export default fetchRootCategories;
