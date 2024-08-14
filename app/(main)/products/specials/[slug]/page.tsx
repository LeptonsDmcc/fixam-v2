import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import Pagination from "@/app/components/Pagination";
import Products from "@/app/components/Products/Products";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import { ProductType } from "@/app/lib/types";
import React from "react";

interface Props {
  params: { slug: string };
}

const SpecialsPage = async ({ params: { slug } }: Props) => {
  let url = `${process.env.FIXAM_BASE_URL}/products/`;

  if (slug === "best-sellers") {
    url = `${process.env.FIXAM_BASE_URL}/products/best_selling/`;
  }

  const productsRes = await fetch(url, {
    cache: "no-store",
  });

  const productsJsonRes = await productsRes.json();
  const products: ProductType[] = productsJsonRes.results;

  return (
    <main>
      <BreadcrumbHeader
        paths={[{ text: slug.split("-").join(" "), href: "" }]}
        withHeading
      />
      <Wrapper>
        <SectionSpacing />
        <Products products={products} />
        <SectionSpacing />
        <Pagination />
        <SectionSpacing />
      </Wrapper>
    </main>
  );
};

export default SpecialsPage;
