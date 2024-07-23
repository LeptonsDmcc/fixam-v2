import BreadcrumbHeader from "../components/Breadcrumb/BreadcrumbHeader";
import ProductCarousel from "../components/Products/ProductCarousel";
import Space from "../components/Spacing/Space";
import Wrapper from "../components/Wrapper";
import { ProductType } from "../lib/types";
import CartTable from "./components/CartTable";
import CheckoutSummary from "./components/CheckoutSummary";

const CartSpacing = () => <Space spacing="my-12" />;

const CartPage = async () => {
  const productsRes = await fetch(`${process.env.FIXAM_BASE_URL}/products/`);
  const productsJsonRes = await productsRes.json();
  const products: ProductType[] = productsJsonRes.results;

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
          <section className="lg:min-w-[200px] lg:w-[400px] lg:max-w-[400px]">
            <CheckoutSummary />
          </section>
        </section>
        <CartSpacing />
        <ProductCarousel products={products} title="Recently Viewed" noSeeAll />
        <CartSpacing />
        <ProductCarousel
          products={products}
          title="Recommended for you"
          noSeeAll
        />
      </Wrapper>
      <CartSpacing />
    </main>
  );
};

export default CartPage;
