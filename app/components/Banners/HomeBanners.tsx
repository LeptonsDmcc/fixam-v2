"use client";

import currency from "../../lib/currency";
import Carousel from "../Carousel/Carousel";
import SliderItem from "../Sliders/SlideItem";

export type NextPrevType = "NEXT" | "PREV";
export type ScrollType = { nextPrev?: NextPrevType; to?: number };

const HomeBanners = () => {
  return (
    <div className="md:my-8 lg:mt-0">
      <div>
        <Carousel withPrevNext>
          <SliderItem
            image="/assets/banners/banner-1.jpg"
            title="Transform Your Space with Fixam: Complete Building and Home Solutions"
            text="From construction materials to stylish furnishings and home appliances, find everything you need to build, beautify, and equip your home."
          />

          <SliderItem
            image="/assets/banners/banner-2.jpg"
            title="Modern sunglasses"
            text={
              <span>
                starting at {currency()}
                <b className="sm:text-2xl md:text-[1.875rem]">15</b>.00
              </span>
            }
          />

          <SliderItem
            image="/assets/banners/banner-3.jpg"
            title="New fashion summer sale"
            text={
              <span>
                starting at {currency()}
                <b className="sm:text-2xl md:text-[1.875rem]">29</b>.99
              </span>
            }
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeBanners;
