import { ProductType } from "@/app/lib/types";
import BaseSpacing from "../Spacing/BaseSpacing";
import DealOfTheDayHeader from "./DealOfTheDayHeader";
import ProductCarousel from "./ProductCarousel";

interface Props {
  productsDayDeal: ProductType[];
  href: string;
}

const MobileDealOfTheDay = ({ productsDayDeal, href }: Props) => {
  return (
    <section className="lg:hidden">
      <DealOfTheDayHeader href={href} />
      <BaseSpacing />
      <p>Time Left: 18h : 27m : 29s</p>
      <BaseSpacing />
      {/* <section className="flex gap-8"> */}
      <ProductCarousel inDealOfTheDay products={productsDayDeal} />
      {/* </section> */}
    </section>
  );
};

export default MobileDealOfTheDay;
