import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import AccountOrderItem, { StausType } from "./AccountOrderItem";
import { Fragment } from "react";

interface Props {
  items: { status: StausType }[];
}

const AccountOrderItems = ({ items }: Props) => {
  return (
    // TODO: DESIGN 1
    // <div className="">
    //   <AccountOrderItem status="delivered" />
    //   <AccountSpacing />
    //   <AccountOrderItem status="delivered" />
    //   <AccountSpacing />
    //   <AccountOrderItem status="pending" />
    //   <AccountSpacing />
    //   <AccountOrderItem status="delivered" />
    // </div>
    // TODO: DESIGN 2
    // <div className="">
    //   <AccountOrderItem status="delivered" />
    //   <AccountSpacing />
    //   <AccountOrderItem status="delivered" />
    //   <AccountOrderItem status="pending" />
    //   <AccountSpacing />
    //   <AccountOrderItem status="delivered" />
    // </div>
    // TODO: DESIGN 3
    <div className=" grid grid-cols-2 gap-4">
      {items.map((item) => (
        <Fragment>
          <AccountOrderItem status={item.status} />
        </Fragment>
      ))}
    </div>
  );
};

export default AccountOrderItems;
