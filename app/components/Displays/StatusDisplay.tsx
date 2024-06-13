import capitalize from "@/app/lib/capitalize";

export type StausType = "pending" | "delivered" | "canceled";

interface Props {
  status: StausType;
}

const statusStyles: { [key in StausType]: string } = {
  pending: "text-orange-400 ",
  delivered: " text-green-400",
  canceled: " text-red-400",
};

const StatusDisplay = ({ status }: Props) => {
  return (
    <div
      className={`${statusStyles[status]} italic py-[1px] w-20  items-center justify-center rounded-sm text-[10px]`}
    >
      {capitalize(status)}
    </div>
  );
};

export default StatusDisplay;
