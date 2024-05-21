"use client";
import React from "react";
import DealOfTheDayHeader from "./DealOfTheDayHeader";
import DealOfTheDayProduct from "./DealOfTheDayProduct";
import PerfectCenter from "../PerfectCenter";
import SliderNavButton from "../Sliders/SliderNavButton";

const DealOfTheDay = () => {
  return (
    <section>
      <DealOfTheDayHeader />
      <DealOfTheDayProduct />
      <PerfectCenter styles="gap-2">
        <SliderNavButton onClick={() => {}} isActive={true} />
        <SliderNavButton onClick={() => {}} isActive={false} />
        <SliderNavButton onClick={() => {}} isActive={false} />
      </PerfectCenter>
    </section>
  );
};

export default DealOfTheDay;
