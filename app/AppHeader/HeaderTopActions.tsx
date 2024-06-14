import currency from "../lib/currency";

const HeaderTopActions = () => {
  return (
    <div className="hidden sm:flex items-center gap-2">
      <select
        name="currency"
        className="border-0 block min-w-[80px] py-1 text-gray-400 text-sm uppercase cursor-pointer
        transition-colors duration-200 hover:text-gray-700"
      >
        <option value="ngn">{currency()}</option>
        <option value="usd">{currency({ currency: "USD" })}</option>
      </select>
    </div>
  );
};

export default HeaderTopActions;
