interface Props {
  circled?: boolean;
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}
const ProductQuantity = ({
  circled,
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) => {
  return (
    <section
      className={`${
        circled ? "gap-2 w-36" : "rounded-xl border min-w-20 md:w-32"
      } flex items-center h-12 font-semibold`}
    >
      <button
        disabled={quantity === 1}
        onClick={decrementQuantity}
        className={`${
          circled
            ? "rounded-full bg-orange-400 text-white w-10 h-10"
            : "w-1/3 text-xl"
        } disabled:cursor-not-allowed`}
      >
        -
      </button>
      <div
        className={`${
          circled
            ? "w-10 h-10 rounded-full bg-gray-100"
            : "w-1/3 border-none focus:border-none focus:outline-none "
        } flex justify-center items-center`}
      >
        {quantity}
      </div>
      {/* <input
        value={quantity}
        readOnly
        className={`${
          circled
            ? "w-10 h-10 rounded-full bg-gray-100"
            : "w-1/3 border-none focus:border-none focus:outline-none "
        } flex justify-center items-center`}
      >
        {quantity}
      </input> */}
      <button
        onClick={incrementQuantity}
        className={`${
          circled
            ? "rounded-full bg-orange-400 text-white w-10 h-10"
            : "w-1/3 text-xl"
        }`}
      >
        +
      </button>
    </section>
  );
};

export default ProductQuantity;
