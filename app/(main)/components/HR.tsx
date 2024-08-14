interface Props {
  color?: "gray" | "orange";
}
const HR = ({ color = "gray" }: Props) => {
  const colors = {
    gray: "bg-gray-200",
    orange: "bg-orange-400/60",
  };
  return <hr className={`${colors[color]} h-[0.5px] rounded-sm border-0`} />;
};

export default HR;
