import currency from "../lib/currency";

interface Props {
  label: string;
  amount: number;
  darkLabel?: boolean;
}

const AmountDisplay = ({ label, amount, darkLabel }: Props) => {
  return (
    <div className="flex justify-between">
      <span className={`${darkLabel && "text-gray-800"} text-gray-300`}>
        {label}
      </span>
      <span className="flex items-center gap-[1px]">
        <span>{currency()}</span>
        <span>{amount}</span>
      </span>
    </div>
  );
};

export default AmountDisplay;
