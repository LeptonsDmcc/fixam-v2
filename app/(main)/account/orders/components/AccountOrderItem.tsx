import Button from "@/app/components/Buttons/Button";
import CopyButton from "@/app/components/Buttons/CopyButton";
import StatusDisplay, {
  StatusType,
} from "@/app/components/Displays/StatusDisplay";
import { ROUTES } from "@/app/lib/contants";
import fetchAll from "@/app/lib/data/fetchAll";
import { getImageFromArrObj } from "@/app/lib/image-helpers";
import truncateOrderId from "@/app/lib/truncateOrderId";
import { OrderItemType, ProductType } from "@/app/lib/types";
import productImage from "@/public/assets/products/watch-1.jpg";
import Image from "next/image";
import { Suspense } from "react";

interface Props {
  orderItem: OrderItemType;
  status: StatusType;
  isCanceled: boolean;
  showSeeDetailButton?: boolean;
}

const AccountOrderItem = async ({
  orderItem,
  status,
  isCanceled,
  showSeeDetailButton,
}: Props) => {
  const product = await fetchAll<ProductType>(`products/${orderItem.product}`);

  return (
    <section className="flex justify-between">
      <div className="flex text-xs flex-grow items-start">
        <div className="flex gap-4 flex-grow">
          <Suspense fallback={<div className=" animate-pulse h-24 w-24"></div>}>
            <Image
              src={getImageFromArrObj(product!.images)}
              width={100}
              height={100}
              alt="Product image"
              className=" border w-24 h-24 object-contain"
            />
          </Suspense>
          <div className=" select-none">
            <p className="my-1 flex gap-2">
              Order ID :
              <CopyButton orderId={orderItem.id!}>
                {truncateOrderId(orderItem?.id || "")}...
              </CopyButton>
            </p>
            <p className="my-1">31 May,2024</p>
            <StatusDisplay status={isCanceled ? "Canceled" : status} />
          </div>
        </div>

        {showSeeDetailButton && (
          <Button
            variant="text"
            elementType="link"
            href={`${ROUTES.account}/orders/${orderItem.order}`}
          >
            <span className="text-[10px]">SEE DETAILS</span>
          </Button>
        )}
      </div>
    </section>
  );
};

export default AccountOrderItem;
