import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import AccountHeader from "../components/AccountHeader";
import AccountOrderItems from "./components/AccountOrderItems";
import Button from "@/app/components/Buttons/Button";
import HR from "@/app/components/HR";
import NavLink from "@/app/components/Navigations/NavLink";
import { ROUTES } from "@/app/lib/contants";

const OrderPage = () => {
  return (
    <section>
      <AccountHeader>Orders</AccountHeader>
      <AccountSpacing />
      <nav className=" flex gap-10">
        <NavLink
          href={`${ROUTES.account}/orders/?s=1#section1`}
          activeClassName="after:h-[1px] after:content-[''] after:block after:rounded-sm after:w-full after:bg-orange-400"
        >
          <Button variant="text">
            <span className=" text-xs ">ONGOING/DELIVERED</span>
          </Button>
        </NavLink>

        <NavLink
          href={`${ROUTES.account}/orders/?s=2#section2`}
          activeClassName="after:h-[1px] after:content-[''] after:block after:rounded-sm 
          after:w-full after:bg-orange-400"
        >
          <Button variant="text">
            <span className=" text-xs ">CANCLED/RETURNED PRODUCT</span>
          </Button>
        </NavLink>
      </nav>
      <HR />
      <AccountSpacing />

      <section className="flex flex-nowrap overflow-hidden  w-full min-w-full">
        <section id="section1" className=" w-full min-w-full flex-grow">
          <AccountOrderItems
            items={[
              { status: "delivered" },
              { status: "delivered" },
              { status: "pending" },
              { status: "delivered" },
            ]}
          />
        </section>

        <section id="section2" className="w-full min-w-full flex-grow">
          <AccountOrderItems items={[{ status: "canceled" }]} />
        </section>
      </section>
    </section>
  );
};

export default OrderPage;
