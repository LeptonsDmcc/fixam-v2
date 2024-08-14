import Image from "next/image";
import VendorStoreBanners from "../../components/Banners/VendorStoreBanners";
import BreadcrumbHeader from "../../components/Breadcrumb/BreadcrumbHeader";
import SectionSpacing from "../../components/Spacing/SectionSpacing";
import Wrapper from "../../components/Wrapper";
import ServiceItem from "../../components/OurServices/ServiceItem";
import ProductCategories from "../../products/components/ProductCategories";

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
