import Image from "next/image";
import ProductCategories from "../../products/components/ProductCategories";
import VendorStoreBanners from "@/app/components/Banners/VendorStoreBanners";
import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import ServiceItem from "@/app/components/OurServices/ServiceItem";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";

const VenodrStorePage = () => {
  return (
    <>
      <VendorStoreBanners />
      <BreadcrumbHeader paths={[{ href: "", text: "Phaozy Collections" }]} />
      <SectionSpacing />
      <Wrapper>
        <section className="flex gap-4 w-[40%]">
          <ServiceItem
            icon={
              <Image
                src="/assets/icons/delivery.svg"
                alt={" vendor delivery service icon"}
                height={48}
                width={48}
              />
            }
            title={"100%"}
            description={"Delivery rate"}
          />
          <ServiceItem
            icon={
              <Image
                src="/assets/icons/success-discount.svg"
                alt={"Vendor Successful Sales icon"}
                height={48}
                width={48}
              />
            }
            title={"27151"}
            description={"Successful Sales"}
          />
        </section>
        <SectionSpacing />
        <ProductCategories category={""} products={[]} found={33} />
      </Wrapper>
    </>
  );
};

export default VenodrStorePage;
