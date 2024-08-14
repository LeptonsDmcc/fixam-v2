import BrandPartners from "../components/BrandPartners";
import BreadcrumbHeader from "../components/Breadcrumb/BreadcrumbHeader";
import ShowcaseSubCategories from "../components/Categories/ShowcaseSubCategories";
import FixAdPremium from "../components/FixAds.tsx/FixAdPremium";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import Wrapper from "../components/Wrapper";
import { ROUTES } from "../lib/contants";
import { fetchProductsBaseOnQuery } from "../lib/data/fetchProductsBaseOnQuery";
import ProductCategories from "./components/ProductCategories";

interface Props {
  params: { slug: string[] };
  searchParams: {
    category: string;
    search: string;
    price: string;
    sort_by: string;
  };
}

// TODO: Search Engine Optimization
// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

// export async function generateMetadata(
//   { params: { slug }, searchParams: { p, search } }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // fetch data
//   // const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];
//   const categoryName =
//     slug && capitalize(decodeURIComponent(slug.at(-1) || ""));
//   const description = p
//     ? `Shop the best ${p} at Fixam Africa. This energy-efficient thermostat offers remote control, easy installation, and seamless integration with smart home systems. Perfect for busy households and tech enthusiasts. Buy now and enjoy free shipping and a 2-year warranty!`
//     : `Discover our extensive collection of ${categoryName} featuring top-quality products and unbeatable prices`;
//   const title = p ? `${p} | Fixam Africa` : `Category | ${categoryName}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       images: [
//         {
//           url: "/assets/products/watch-1.jpg",
//         },
//         ...previousImages,
//       ],
//       title,
//       description,
//       siteName: "Fixam Africa",
//       type: "website",
//       locale: "en-US",
//       url: `pathname`,
//     },
//   };
// }

const ProductsPage = async ({ searchParams }: Props) => {
  const { products, found } = await fetchProductsBaseOnQuery(searchParams);
  const categorySlug = searchParams.category;

  let generateCrumb: {
    href: string;
    text: string;
  }[] = [{ href: "", text: "" }];

  if (products && products.length && products[0].crumbs) {
    generateCrumb = products[0].crumbs
      ?.map((crumb) => ({
        href: `${ROUTES.product}/?category=${crumb}`,
        text: crumb,
      }))
      .reverse();
  }

  return (
    <main>
      <BreadcrumbHeader paths={generateCrumb || []} withHeading />
      <Wrapper>
        <>
          <SectionSpacing />
          {categorySlug && <ShowcaseSubCategories slug={categorySlug} />}
          <SectionSpacing />
          <ProductCategories
            products={products}
            category={categorySlug}
            found={found}
          />
          <SectionSpacing />
          <FixAdPremium />
          <SectionSpacing />
          {/* <ProductCarousel title="Latest Products" /> */}
          {/* <SectionSpacing /> */}
          <BrandPartners />
        </>
      </Wrapper>
      <SectionSpacing />
    </main>
  );
};

export default ProductsPage;
