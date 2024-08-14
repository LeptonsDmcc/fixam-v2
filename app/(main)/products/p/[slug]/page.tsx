import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import { Metadata, ResolvingMetadata } from "next";
import ProductDetail from "../../components/ProductDetail";
import { Suspense } from "react";

interface Props {
  params: { slug: string[] };
}

// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data

  return {};

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
}

const ProductDetailPage = async ({ params: { slug } }: Props) => {
  const productRes = await fetch(
    `${process.env.FIXAM_BASE_URL}/products/by_slug/${slug}/`
  );

  const product = await productRes.json();

  return (
    <main>
      <BreadcrumbHeader
        paths={
          [
            ...product.categories.split(">").map((cat: string) => ({
              text: cat,
              href: "",
            })),
            { text: product.name, href: "" },
          ]
          // [{ text: "", href: "", }]
        }
        // withHeading
      />
      <Wrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <ProductDetail product={product} />
        </Suspense>
      </Wrapper>
      <SectionSpacing />
    </main>
  );
};

export default ProductDetailPage;
