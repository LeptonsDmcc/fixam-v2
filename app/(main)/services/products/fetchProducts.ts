import { ProductType } from "@/app/lib/types";
import { FetchResponse } from "../apiClient";
import { productService } from "./productService";

const fetchProducts = async (limit?: number) => {
  const products = await productService.getAll(`?limit=${limit || 20}`);

  return products as FetchResponse<ProductType>;
};

export default fetchProducts;
