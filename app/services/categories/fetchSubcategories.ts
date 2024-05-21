import { CategoryType, categoryService } from "./categoryService";

const fetchSubcategories = async (categoryId: string) => {
  const subCategories: CategoryType[] = (await categoryService.getAll(
    `${categoryId}/subcategories/`
  )) as CategoryType[];

  return subCategories;
};

export default fetchSubcategories;
