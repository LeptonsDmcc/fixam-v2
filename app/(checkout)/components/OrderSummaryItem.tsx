import Image from "next/image";
import ProductPrice from "@/app/components/Products/ProductPrice";

interface Props {
  isReceipt?: boolean;
}

const OrderSummaryItem = ({ isReceipt }: Props) => {
  return (
    <section className="flex gap-2 items-center">
      <Image
        src="/assets/products/watch-1.jpg"
        alt=""
        width={120}
        height={120}
      />
      <div
        className={`${
          isReceipt && "flex justify-between flex-grow items-center"
        }`}
      >
        <div>
          <p className=" text-gray-400 my-1">BINATONE</p>
          <p className="my-1">Rice Master Rice Co.....</p>
        </div>
        <ProductPrice discount={0} priceLightGray={isReceipt} />
      </div>
    </section>
  );
};

export default OrderSummaryItem;
