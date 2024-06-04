import Image from "next/image";
import ProductPrice from "@/app/components/Products/ProductPrice";

const OrderSummaryItem = () => {
  return (
    <section className="flex gap-2 items-center">
      <Image
        src="/assets/products/watch-1.jpg"
        alt=""
        width={120}
        height={120}
      />
      <div>
        <p className=" text-gray-400 my-1">BINATONE</p>
        <p className="my-1">Rice Master Rice Co.....</p>
        <ProductPrice />
      </div>
    </section>
  );
};

export default OrderSummaryItem;
