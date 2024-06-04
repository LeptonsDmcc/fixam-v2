import BreadcrumbHeader from "../components/Breadcrumb/BreadcrumbHeader";
import ProductsShowcase from "../components/Products/ProductsShowcase";
import Space from "../components/Spacing/Space";
import Wrapper from "../components/Wrapper";
import CartTable from "./components/CartTable";
import CheckoutSummary from "./components/CheckoutSummary";

const CartSpacing = () => <Space spacing="my-12" />;

const CartPage = () => {
  return (
    <main>
      <BreadcrumbHeader
        paths={[{ text: "Shopping Cart", href: `` }]}
        backText="Continue shopping"
      />
      <CartSpacing />
      <Wrapper>
        <section className="flex gap-11">
          <CartTable />
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
