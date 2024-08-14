import Image from "next/image";

import productImage from "@/public/assets/products/watch-1.jpg";
import StatusDisplay, {
  StausType,
} from "@/app/(main)/components/Displays/StatusDisplay";
import Button from "@/app/(main)/components/Buttons/Button";
import { ROUTES } from "@/app/lib/contants";

interface Props {
  status: StausType;
}

const AccountOrderItem = ({ status }: Props) => {
  return (
    <section className="flex justify-between">
      <div className="flex text-xs flex-grow items-start">
        <div className="flex gap-4 flex-grow">
          <Image
            src={productImage}
            alt="Product image"
            className=" border w-28"
          />
          <div>
            <p className="my-1">Order ID : 1389516282</p>
            <p className="my-1">31 May,2024</p>
            <StatusDisplay status={status} />
          </div>
        </div>

        <Button
          variant="text"
          elementType="link"
          href={`${ROUTES.account}/orders/1`}
        >
          <span className="text-[10px]">SEE DETAILS</span>
        </Button>
      </div>
    </section>
  );
};

export default AccountOrderItem;
