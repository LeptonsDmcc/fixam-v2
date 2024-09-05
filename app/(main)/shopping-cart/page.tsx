import { fixamBaseUrl } from "@/app/lib/contants";
import CartTableSummary from "./components/CartTableSummary";
import { ProductType } from "@/app/lib/types";
import getAuthUser, { getAuthToken } from "@/app/lib/data/user";
import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import ProductCarousel from "@/app/components/Products/ProductCarousel";
import Space from "@/app/components/Spacing/Space";
import Wrapper from "@/app/components/Wrapper";

const CartSpacing = () => <Space spacing="my-12" />;

const CartPage = async () => {
  const user = await getAuthUser();
  const accessToken = getAuthToken();

  const isAuth = user !== null;

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
        <CartTableSummary
          fixamBaseUrl={fixamBaseUrl || ""}
          isAuth={isAuth}
          accessToken={accessToken || ""}
        />
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
