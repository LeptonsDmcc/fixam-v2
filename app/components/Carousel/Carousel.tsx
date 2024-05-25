"use client";
import { PropsWithChildren, ReactNode, useState } from "react";
import PrevNextButtons from "./PrevNextButtons";
import SliderNavButton from "../Sliders/SliderNavButton";
import PerfectCenter from "../PerfectCenter";

interface Props {
  children: ReactNode[];
  isNavBtnsBottom?: boolean;
}
const Carousel = ({ children: slides, isNavBtnsBottom }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevCurrentIndex) =>
      prevCurrentIndex === 0 ? slides.length - 1 : prevCurrentIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevCurrentIndex) =>
      prevCurrentIndex === slides.length - 1 ? 0 : prevCurrentIndex + 1
    );
  };

  return (
    <section className=" overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%` }}
      >
        {slides}
      </div>

      <PrevNextButtons onPreviousClick={prev} onNextClick={next} />

      <PerfectCenter
        styles={`${
          isNavBtnsBottom ? "bottom-0" : "bottom-16"
        } gap-2 left-1/2 absolute -translate-x-1/2`}
      >
        {slides.map((s, i) => (
          <SliderNavButton
            isActive={i === currentIndex}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </PerfectCenter>
    </section>
  );
};

export default Carousel;
