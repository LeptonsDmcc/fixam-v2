interface Props {
  circled?: boolean;
}
const ProductQuantity = ({ circled }: Props) => {
  return (
    <section
      className={`${
        circled ? "gap-2 w-36" : "rounded-xl border w-32"
      } flex items-center h-12 font-semibold`}
    >
      <button
        className={`${
          circled
            ? "rounded-full bg-orange-400 text-white w-10 h-10"
            : "w-1/3 text-xl"
        }`}
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
        1
      </div>
      <button
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
