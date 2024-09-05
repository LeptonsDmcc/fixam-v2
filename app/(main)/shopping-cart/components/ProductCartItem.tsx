import { ProductType } from "@/app/lib/types";
import Image from "next/image";
import { getImageFromArrObj } from "@/app/lib/image-helpers";
import Space from "@/app/components/Spacing/Space";

interface Props {
  product: ProductType;
}

const ProductCartItem = ({ product }: Props) => {
  if (product)
    return (
      <div className="flex items-center gap-3">
        <div
          className="ml-2 hidden
             md:block"
        >
          <Image
            src={getImageFromArrObj(product.images)}
            alt={product.name}
            width={120}
            height={120}
            className=" rounded-md w-[120px] h-[120px] object-contain"
          />
        </div>

        <div>
          <h4 className=" max-w-[222px] text-base line-clamp-1">
            {product.name}
          </h4>
          <Space spacing="py-1" />
          <p className=" text-xs text-gray-400">
            Sold by: Three Ace Technology Services Ltd
          </p>
        </div>
      </div>
    );
};

export default ProductCartItem;
