import currency from "@/app/lib/currency";

interface Props {
  label: string;
  value: string;
  darkLabel?: boolean;
  isCurrency?: boolean;
  boldLabelValue?: boolean;
}

const LabelValueDisplay = ({
  label,
  value,
  darkLabel,
  boldLabelValue,
  isCurrency,
}: Props) => {
  return (
    <div
      className={`${boldLabelValue && "font-semibold"} flex justify-between`}
    >
      <span className={`${darkLabel && "text-gray-800"} text-gray-300`}>
        {label}
      </span>
      <span className="flex items-center gap-[1px]">
        {/* {isCurrency && <span>{currency()}</span>} */}
        <span>{value}</span>
      </span>
    </div>
  );
};

export default LabelValueDisplay;
