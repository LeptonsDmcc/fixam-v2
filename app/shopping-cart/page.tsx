import BreadcrumbHeader from "../components/Breadcrumb/BreadcrumbHeader";
import ProductCarousel from "../components/Products/ProductCarousel";
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
        <section
          className="flex flex-col gap-11 
        md:flex-row"
        >
          <CartTable />
          <section
            className="
          lg:min-w-[200px] lg:w-[400px] lg:max-w-[400px]"
          >
            <CheckoutSummary />
          </section>
        </section>
        <CartSpacing />
        <ProductCarousel title="Recently Viewed" noSeeAll />
        <CartSpacing />
        <ProductCarousel title="Recommended for you" noSeeAll />
      </Wrapper>
      <CartSpacing />
    </main>
  );
};

export default CartPage;
