import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import Pagination from "@/app/components/Pagination";
import Products from "@/app/components/Products/Products";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import React from "react";

interface Props {
  params: { slug: string };
}
const SpecialsPage = ({ params: { slug } }: Props) => {
  return (
    <main>
      <BreadcrumbHeader
        paths={[{ text: slug.split("-").join(" "), href: "" }]}
        withHeading
      />
      <Wrapper>
        <SectionSpacing />
        <Products />
        <SectionSpacing />
        <Pagination />
        <SectionSpacing />
      </Wrapper>
    </main>
  );
};

export default SpecialsPage;
