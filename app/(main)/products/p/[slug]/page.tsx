import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import { Metadata, ResolvingMetadata } from "next";
import ProductDetail from "../../components/ProductDetail";
import { Suspense } from "react";
import fetchAll from "@/app/lib/data/fetchAll";
import { ProductType } from "@/app/lib/types";

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
  const product = await fetchAll<ProductType>(`products/by_slug/${slug}`);

  // const product = await productRes.json();
  let crumbs: any = [];

  if (product && product.categories) {
    crumbs = [
      ...product.categories.split(">").map((cat: string) => ({
        text: cat,
        href: "",
      })),
      { text: product.name, href: "" },
    ];
  }

  return (
    <main>
      <BreadcrumbHeader
        paths={
          crumbs
          // [{ text: "", href: "", }]
        }
        // withHeading
      />
      <Wrapper>
        <Suspense fallback={<p>Loading...</p>}>
          {product && <ProductDetail product={product} />}
        </Suspense>
      </Wrapper>
      <SectionSpacing />
    </main>
  );
};

export default ProductDetailPage;
