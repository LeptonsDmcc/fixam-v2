import Footer from "@/app/components/Footer/Footer";
import Space from "@/app/components/Space";
import BreadcrumbHeader from "./BreadcrumbHeader";
import ProductDetail from "../components/ProductDetail";
import ProductCategories from "../components/ProductCategories";
import decodePath from "@/app/lib/decodePath";

interface Props {
  params: { slug: string[] };
  searchParams: { p: string };
}

const ProductsPage = ({ params: { slug }, searchParams: { p } }: Props) => {
  let updatedSlug = slug;
  if (p && slug) updatedSlug = slug.concat(p);

  return (
    <main>
      <BreadcrumbHeader
        paths={slug ? updatedSlug : [p]}
        withHeading={p === undefined}
      />
      {p ? (
        <ProductDetail />
      ) : (
        <ProductCategories dealFor={decodeURIComponent(slug.at(-1) || "")} />
      )}
      <Space spacing="my-12" />
      <Footer />
    </main>
  );
};

export default ProductsPage;
