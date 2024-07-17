"use client";
import Carousel from "../Carousel/Carousel";
import BaseSpacing from "../Spacing/BaseSpacing";
import DealOfTheDayHeader from "./DealOfTheDayHeader";
import DealOfTheDayProduct from "./DealOfTheDayProduct";
import ProductCarousel from "./ProductCarousel";

interface Props {
  href: string;
}
const DealOfTheDay = ({ href }: Props) => {
  return (
    <>
      <section className="hidden lg:block">
        <DealOfTheDayHeader href={href} />
        <Carousel withPrevNext isNavBtnsBottom>
          <DealOfTheDayProduct />
          <DealOfTheDayProduct />
        </Carousel>
      </section>

      <section className="lg:hidden">
        <DealOfTheDayHeader href={href} />
        <BaseSpacing />
        <p>Time Left: 18h : 27m : 29s</p>
        <BaseSpacing />
        {/* <section className="flex gap-8"> */}
        <ProductCarousel inDealOfTheDay />
        {/* </section> */}
      </section>
    </>
  );
};

export default DealOfTheDay;
