import { CategoryType } from "@/app/lib/types";
import { categoryService } from "./categoryService";
import { FetchResponse } from "../apiClient";

const fetchSubcategories = async (categoryId: string) => {
  const subCategories = await categoryService.getAll(
    `${categoryId}/subcategories/`
  );

  return subCategories;
};

export default fetchSubcategories;
