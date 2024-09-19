import { ProductType } from "@/app/lib/types";
import { productService } from "./productService";

const fetchTrendingProducts = async () => {
  const products = await productService.getAll(`featured/`);
  return products as ProductType[];
};

export default fetchTrendingProducts;
