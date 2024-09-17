import ProductPrice from "@/app/components/Products/ProductPrice";
import { CartItemType, ProductType } from "@/app/lib/types";
import Image from "next/image";

import { getImageFromArrObj } from "@/app/lib/image-helpers";
import { useEffect, useState } from "react";
import { productService } from "../../services/products/productService";

interface Props {
  isReceipt?: boolean;
  orderItem: CartItemType;
}

const OrderSummaryItem = ({ isReceipt, orderItem }: Props) => {
  // const product = useProduct(cartItem.id || "");
  const [product, setProduct] = useState<ProductType | undefined>(undefined);

  useEffect(() => {
    const initProd = async () => {
      const prod = await productService.get(orderItem.prod_id || "");
      // if (prod) {
      setProduct(prod);
      // }
    };

    initProd();
  }, []);

  if (product)
    return (
      <section className="flex gap-2 items-center">
        <Image
          src={getImageFromArrObj(product.images)}
          alt={product.name}
          width={120}
          height={120}
          className=" max-h-[120px] max-w-[120px] rounded-lg"
        />
        <div
          className={`${
            isReceipt && "flex justify-between flex-grow items-center flex-wrap"
          }`}
        >
          <div>
            <p className=" text-gray-400 my-1">
              {product.categories?.split(">")[0].toUpperCase()}
            </p>
            <p className="my-1 line-clamp-1">{product.name}</p>
          </div>
          <div className="w-full lg:w-auto">
            <ProductPrice
              discount={0}
              priceLightGray={isReceipt}
              price={product.selling_price * orderItem.quantity}
            />
          </div>
        </div>
      </section>
    );
};

export default OrderSummaryItem;
