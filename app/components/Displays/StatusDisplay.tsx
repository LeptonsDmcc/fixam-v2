import capitalize from "@/app/lib/capitalize";
import { OrderStatusType } from "@/app/lib/types";

export type StatusType =
  | "Placed"
  | "Delivered"
  | "Confirmed"
  | "Shipped"
  | "Canceled";

interface Props {
  status: StatusType;
}

const statusStyles: { [key in StatusType]: string } = {
  Placed: "text-orange-400 ",
  Delivered: "text-green-400",
  Confirmed: "text-green-400",
  Shipped: "text-green-400",
  Canceled: "text-red-400",
};

const StatusDisplay = ({ status }: Props) => {
  return (
    <div
      className={`${statusStyles[status]} italic py-[1px] w-20  items-center 
      justify-center rounded-sm 
      lg:text-[10px]`}
    >
      {capitalize(status)}
    </div>
  );
};

export default StatusDisplay;

// import capitalize from "@/app/lib/capitalize";

// export type StausType = "pending" | "delivered" | "canceled";

// interface Props {
//   status: StausType;
// }

// const statusStyles: { [key in StausType]: string } = {
//   pending: "text-orange-400 ",
//   delivered: " text-green-400",
//   canceled: " text-red-400",
// };

// const StatusDisplay = ({ status }: Props) => {
//   return (
//     <div
//       className={`${statusStyles[status]} italic py-[1px] w-20  items-center justify-center rounded-sm
//       lg:text-[10px]`}
//     >
//       {capitalize(status)}
//     </div>
//   );
// };

// export default StatusDisplay;
