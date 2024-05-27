import Wrapper from "../components/Wrapper";
import BreadcrumbHeader from "../components/Breadcrumb/BreadcrumbHeader";
import Space from "../components/Space";
import Checkbox from "../components/Inputs/Checkbox";
import HR from "../components/HR";
import Image from "next/image";
import ProductPrice from "../components/Products/ProductPrice";
import ProductQuantity from "../components/Products/ProductQuantity";
import Card from "../components/Card";
import CartItemsTR from "./components/CartItemsTR";
import CheckoutSummary from "./components/CheckoutSummary";
import ProductsShowcase from "../components/Products/ProductsShowcase";

const CartSpacing = () => <Space spacing="my-12" />;

const CartPage = () => {
  return (
    <main>
      <BreadcrumbHeader
        paths={["Shopping Cart"]}
        backText="Continue shopping"
      />
      <CartSpacing />
      <Wrapper>
        <section className="flex gap-11">
          <table className=" flex-grow">
            <thead>
              <tr className="flex justify-between items-center w-full">
                <th className="flex uppercase items-center gap-6 flex-grow">
                  <Checkbox />
                  <span>PRODUCT</span>
                </th>
                <th className="flex uppercase items-center gap-6 w-[22.5%]">
                  Price
                </th>
                <th className="flex uppercase items-center gap-6 w-[22.5%]">
                  Quantity
                </th>
                <th className=" w-[5%]"></th>
              </tr>
            </thead>
            <Space spacing="my-12" />
            <HR />
            <tbody>
              <CartItemsTR />
            </tbody>
          </table>
          <section className="min-w-[200px] w-[400px] max-w-[400px]">
            <CheckoutSummary />
          </section>
        </section>
        <CartSpacing />
        <ProductsShowcase title="Recently Viewed" noSeeAll />
        <CartSpacing />
        <ProductsShowcase title="Recommended for you" noSeeAll />
      </Wrapper>

      <CartSpacing />
    </main>
  );
};

export default CartPage;
