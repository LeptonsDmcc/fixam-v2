import { useEffect, useState } from "react";
import { ProductType } from "../lib/types";
import { productService } from "../(main)/services/products/productService";

const useProduct = (productId: string) => {
  const [product, setProduct] = useState<ProductType | undefined>(undefined);

  useEffect(() => {
    const initProd = async () => {
      const prod = await productService.get(productId);
      console.log("PRODUCT CLIENT", prod);
      // if(prod) {

      //     setProduct({ name: product?.name, images: product?.images, slug: product?.slug, selling_price:prod.selling_price});
      // }
    };

    initProd();
  }, [productId]);

  return {
    product,
  };
};

export default useProduct;
