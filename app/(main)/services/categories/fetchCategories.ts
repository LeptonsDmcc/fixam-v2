import { FetchResponse } from "../apiClient";
import { CategoryType, categoryService } from "./categoryService";

const fetchCategories = async () => {
  const categories = (await categoryService.getAll(
    "?limit=100"
  )) as CategoryType[];
  return categories;
};

export default fetchCategories;
