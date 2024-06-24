"use client";
import Carousel from "../Carousel/Carousel";
import BaseSpacing from "../Spacing/BaseSpacing";
import DealOfTheDayHeader from "./DealOfTheDayHeader";
import DealOfTheDayProduct from "./DealOfTheDayProduct";
import ProductCarousel from "./ProductCarousel";

const DealOfTheDay = () => {
  return (
    <>
      <section className="hidden">
        <DealOfTheDayHeader />
        <Carousel withPrevNext isNavBtnsBottom>
          <DealOfTheDayProduct />
          <DealOfTheDayProduct />
        </Carousel>
      </section>

      <section className="md:hidden">
        <DealOfTheDayHeader />
        <BaseSpacing />
        <p>Time Left: 18h : 27m : 29s</p>
        <BaseSpacing />
        {/* <section className="flex gap-8"> */}
        <ProductCarousel title="Best Sellers" inDealOfTheDay />
        {/* </section> */}
      </section>
    </>
  );
};

export default DealOfTheDay;
