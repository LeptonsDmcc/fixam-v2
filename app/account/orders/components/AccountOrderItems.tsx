import { StausType } from "@/app/components/Displays/StatusDisplay";
import { Fragment } from "react";
import AccountOrderItem from "./AccountOrderItem";

interface Props {
  items: { status: StausType }[];
}

const AccountOrderItems = ({ items }: Props) => {
  return (
    <div className=" grid grid-cols-2 gap-4">
      {items.map((item) => (
        <Fragment key={item.status}>
          <AccountOrderItem status={item.status} />
        </Fragment>
      ))}
    </div>
  );
};

export default AccountOrderItems;
