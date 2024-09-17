import AddToCartButton from "@/app/components/Buttons/AddToCartButton";
import Card from "@/app/components/Card";
import ProductPrice from "@/app/components/Products/ProductPrice";
import Space from "@/app/components/Spacing/Space";
import TrashBin from "@/app/components/TrashBin";
import fetchAll from "@/app/lib/data/fetchAll";
import isAuthenticated from "@/app/lib/data/verifyAuth";
import { getImageFromArrObj } from "@/app/lib/image-helpers";
import { ProductType } from "@/app/lib/types";
import Image from "next/image";
import { Suspense } from "react";
import StoreForProduct from "./StoreForProduct";
import getIdFromString from "@/app/lib/data/getIdFromString";
import { removeItemToWishlistAction } from "@/actions/product";

interface Props {
  productId: string;
  wishItemId: string;
}

const SavedItem = async ({ productId, wishItemId }: Props) => {
  const isAuth = await isAuthenticated();

  const product = await fetchAll<ProductType>(`products/${productId}`);

  return (
    <Card borderedCard styles="flex justify-between w-full items-center">
      <div
        className="w-[50%] flex items-center 
      lg:flex-grow lg:w-auto"
      >
        <Suspense>
          <div className="flex items-center gap-3">
            <div className="hidden lg:ml-2 lg:block">
              <Image
                src={getImageFromArrObj(product!.images)}
                alt={product!.name}
                width={120}
                height={120}
                className=" rounded-md"
              />
            </div>

            <div>
              <h4>{product?.name}</h4>
              <Space spacing="py-1" />
              <StoreForProduct
                storeId={getIdFromString(product?.store || "")}
              />
            </div>
          </div>
        </Suspense>
      </div>

      <div className="w-[22.5%] text-center">
        <ProductPrice discount={0} price={product?.selling_price} />
      </div>

      <div className="w-[22.5%] hidden lg:block">
        <AddToCartButton
          productId={productId}
          productPrice={product!.selling_price}
          isAuth={isAuth}
        />
      </div>

      <div
        className="flex flex-col justify-between items-center h-24 lg:w-[5%]
      lg:flex-row"
      >
        <div className="lg:hidden">
          <AddToCartButton
            productId={product?.id || ""}
            productPrice={product!.selling_price}
            isAuth={isAuth}
            cartOnly
          />
        </div>
        <form action={removeItemToWishlistAction.bind(null, wishItemId)}>
          <button>
            <TrashBin />
          </button>
        </form>
      </div>
    </Card>
  );
};

export default SavedItem;
