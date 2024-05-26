"use client";
import Carousel from "../Carousel/Carousel";
import DealOfTheDayHeader from "./DealOfTheDayHeader";
import DealOfTheDayProduct from "./DealOfTheDayProduct";

const DealOfTheDay = () => {
  return (
    <section>
      <DealOfTheDayHeader />
      <Carousel withPrevNext isNavBtnsBottom>
        <DealOfTheDayProduct />
        <DealOfTheDayProduct />
      </Carousel>
    </section>
  );
};

export default DealOfTheDay;
