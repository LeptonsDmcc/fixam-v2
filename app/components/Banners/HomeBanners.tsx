"use client";

import Sliders from "../Sliders/Sliders";
import currency from "../../lib/currency";
import SliderItem from "../Sliders/SlideItem";
import { RefObject, useEffect, useRef, useState } from "react";

export type NextPrevType = "NEXT" | "PREV";
export type ScrollType = { nextPrev?: NextPrevType; to?: number };

const HomeBanners = () => {
  const containerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [activeSlider, setActiveSlider] = useState(-2400);

  const handleScrollTo = (option: ScrollType) => {
    const toLength =
      option.nextPrev === "PREV" ? -window.innerWidth : window.innerWidth;

    if (containerRef.current) {
      // containerRef.current.scrollBy(window.innerWidth, 0);
      containerRef.current.scrollBy({
        left: option.to || toLength,
        top: 0,
        behavior: "smooth",
      });
    }
    // setScrollTo((prevScrollTo) => {
    //   if (prevScrollTo == -scrollLength) return -800;
    //   if (prevScrollTo == -800) return -800;
    //   return scrollLength - prevScrollTo;
    // });
  };

  // const scrollRight = (to: number) => {
  //   setScrollTo(to);
  //   // setScrollTo((prevScrollTo) => {
  //   //   if (prevScrollTo >= scrollLength * scrollCount)
  //   //     return scrollLength * scrollCount;
  //   //   return Math.abs(prevScrollTo) + scrollLength;
  //   // });
  // };

  // useEffect(() => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollBy({
  //       left: scrollTo,
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [scrollTo]);

  return (
    <div className=" my-8 lg:mt-0">
      <div>
        <Sliders ref={containerRef}>
          <SliderItem
            image="/assets/banners/banner-1.jpg"
            title="Transform Your Space with Fixam: Complete Building and Home Solutions"
            scrollTo={handleScrollTo}
            activeSlider={activeSlider}
            setActiveSlider={setActiveSlider}
            text="From construction materials to stylish furnishings and home appliances, find everything you need to build, beautify, and equip your home."
          />

          <SliderItem
            image="/assets/banners/banner-2.jpg"
            title="Modern sunglasses"
            scrollTo={handleScrollTo}
            activeSlider={activeSlider}
            setActiveSlider={setActiveSlider}
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
            scrollTo={handleScrollTo}
            activeSlider={activeSlider}
            setActiveSlider={setActiveSlider}
            text={
              <span>
                starting at {currency()}
                <b className="sm:text-2xl md:text-[1.875rem]">29</b>.99
              </span>
            }
          />
        </Sliders>
      </div>
    </div>
  );
};

export default HomeBanners;
