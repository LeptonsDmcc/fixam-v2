import Image from "next/image";

import productImage from "@/public/assets/products/watch-1.jpg";
import Button from "@/app/components/Buttons/Button";
import capitalize from "@/app/lib/capitalize";
import { ROUTES } from "@/app/lib/contants";

export type StausType = "pending" | "delivered" | "canceled";

interface Props {
  status: StausType;
}

const statusStyles: { [key in StausType]: string } = {
  pending: "text-orange-400 ",
  delivered: " text-green-400",
  canceled: " text-red-400",
};

const AccountOrderItem = ({ status }: Props) => {
  // return (
  //   <section className=" flex justify-between">
  //     <div className="flex text-xs">
  //       <div className="flex gap-4 flex-grow">
  //         <Image
  //           src={productImage}
  //           alt="Product image"
  //           className=" border w-28"
  //         />
  //         <div>
  //           <p className="my-1">Order ID : 1389516282</p>
  //           <p className="my-1">31 May,2024</p>
  //           <div
  //             className={`${statusStyles[status]} py-[1px] w-20 flex items-center justify-center rounded-sm text-[10px]`}
  //           >
  //             {capitalize(status)}
  //           </div>
  //         </div>
  //       </div>

  //       <Button variant="text">
  //         <span className=" text-[10px]">SEE DETAILS</span>
  //       </Button>
  //     </div>
  //   </section>
  // );

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
            <div
              className={`${statusStyles[status]} italic py-[1px] w-20  items-center justify-center rounded-sm text-[10px]`}
            >
              {capitalize(status)}
            </div>
          </div>
        </div>

        <Button
          variant="text"
          elementType="link"
          href={`${ROUTES.account}/orders/1`}
        >
          <span className=" text-[10px]">SEE DETAILS</span>
        </Button>
      </div>
    </section>
  );
};

export default AccountOrderItem;
