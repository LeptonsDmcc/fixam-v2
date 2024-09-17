"use client";

interface Props {
  quantity: number;
  handleUpdateQuantity: (quantity: number) => void;
}
const ProductDetailQuantity = ({
  quantity,
  handleUpdateQuantity,
}: Readonly<Props>) => {
  return (
    <div>
      Quantity:
      <section className="gap-2 w-36 flex items-center h-12 font-semibold">
        <button
          onClick={() => handleUpdateQuantity(quantity - 1)}
          disabled={quantity === 1}
          className="rounded-full bg-orange-400 text-white w-10 
          h-10 disabled:cursor-not-allowed
           disabled:bg-gray-300 disabled:text-black"
        >
          -
        </button>
        <input
          value={quantity}
          readOnly
          className={
            "w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center text-center"
          }
        />

        <button
          onClick={() => handleUpdateQuantity(quantity + 1)}
          className={"rounded-full bg-orange-400 text-white w-10 h-10"}
        >
          +
        </button>
      </section>
    </div>
  );
};

export default ProductDetailQuantity;
