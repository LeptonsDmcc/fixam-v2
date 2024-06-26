import BrandPartners from "@/app/components/BrandPartners";
import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import SubCategories from "@/app/components/Categories/SubCategories";
import FixAdPremium from "@/app/components/FixAds.tsx/FixAdPremium";
import ProductCarousel from "@/app/components/Products/ProductCarousel";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import capitalize from "@/app/lib/capitalize";
import { Metadata, ResolvingMetadata } from "next";
import ProductCategories from "../components/ProductCategories";
import ProductDetail from "../components/ProductDetail";

interface Props {
  params: { slug: string[] };
  searchParams: { p: string };
}

// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

export async function generateMetadata(
  { params: { slug }, searchParams: { p } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const categoryName =
    slug && capitalize(decodeURIComponent(slug.at(-1) || ""));
  const description = p
    ? `Shop the best ${p} at Fixam Africa. This energy-efficient thermostat offers remote control, easy installation, and seamless integration with smart home systems. Perfect for busy households and tech enthusiasts. Buy now and enjoy free shipping and a 2-year warranty!`
    : `Discover our extensive collection of ${categoryName} featuring top-quality products and unbeatable prices`;
  const title = p ? `${p} | Fixam Africa` : `Category | ${categoryName}`;

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: "/assets/products/watch-1.jpg",
        },
        ...previousImages,
      ],
      title,
      description,
      siteName: "Fixam Africa",
      type: "website",
      locale: "en-US",
      url: `pathname`,
    },
  };
}

const ProductsPage = ({ params: { slug }, searchParams: { p } }: Props) => {
  let updatedSlug = slug;
  if (p && slug) updatedSlug = slug.concat(p);

  return (
    <main>
      <BreadcrumbHeader
        paths={slug ? [{ text: "", href: "" }] : [{ href: "", text: p }]}
        withHeading={p === undefined}
      />
      <Wrapper>
        {p ? (
          <ProductDetail />
        ) : (
          <>
            <SectionSpacing />
            <SubCategories />
            <SectionSpacing />
            <ProductCategories
              dealFor={decodeURIComponent(slug.at(-1) || "")}
            />
            <SectionSpacing />
            <FixAdPremium />
            <SectionSpacing />
            <ProductCarousel title="Latest Products" />
            <SectionSpacing />
            <BrandPartners />
          </>
        )}
      </Wrapper>
      <SectionSpacing />
      <div className="my-20 md:hidden"></div>
    </main>
  );
};

export default ProductsPage;
