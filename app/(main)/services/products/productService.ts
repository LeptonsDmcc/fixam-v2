import APIClient from "../apiClient";

export type ProductType = {
  name: string;
  category_name: string;
  images: { [key: string]: string }[];
  id: string;
  selling_price: number;
};

const productService = new APIClient<ProductType>("/products/");

export { productService };
