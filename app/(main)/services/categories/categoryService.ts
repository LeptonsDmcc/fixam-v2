import APIClient from "../apiClient";

export type CategoryType = {
  id: string;
  subcategories: string[];
  slug: string;
  name: string;
  description: string;
  parent: string | null;
  has_subcategories?: boolean;
  products: number;
};

const categoryService = new APIClient<CategoryType>("/products/categories/");

export { categoryService };
