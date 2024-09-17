import { ProductType } from "@/app/lib/types";
import APIClient from "../apiClient";

const productService = new APIClient<ProductType>("/products");

export { productService };
