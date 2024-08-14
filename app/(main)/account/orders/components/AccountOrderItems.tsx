import { Fragment } from "react";
import AccountOrderItem from "./AccountOrderItem";
import { StausType } from "@/app/(main)/components/Displays/StatusDisplay";

interface Props {
  items: { status: StausType }[];
}

const AccountOrderItems = ({ items }: Props) => {
  return (
    <div
      className=" grid  gap-4
    lg:grid-cols-2"
    >
      {items.map((item) => (
        <Fragment key={item.status}>
          <AccountOrderItem status={item.status} />
        </Fragment>
      ))}
    </div>
  );
};

export default AccountOrderItems;
