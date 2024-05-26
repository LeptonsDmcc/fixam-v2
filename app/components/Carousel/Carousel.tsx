"use client";
import { ReactNode, useEffect, useState } from "react";
import PerfectCenter from "../PerfectCenter";
import SliderNavButton from "../Sliders/SliderNavButton";
import PrevNextButtons, { LeftRightPosType } from "./PrevNextButtons";

interface Props {
  children: ReactNode[];
  isNavBtnsBottom?: boolean;
  withPrevNext?: boolean;
  leftRightPos?: LeftRightPosType;
  bottomPos?: "16" | "6";
  activeIndex?: number;
  onHandlePrev?: () => void;
  onHandleNext?: () => void;
  onHandleCurrentIndex?: (index: number) => void;
}
const Carousel = ({
  children: slides,
  isNavBtnsBottom,
  withPrevNext,
  leftRightPos,
  bottomPos = "16",
  activeIndex,
  onHandlePrev,
  onHandleNext,
  onHandleCurrentIndex,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex || 0);

  const pos = {
    6: "bottom-6",
    16: "bottom-16",
  };

  useEffect(() => {
    setCurrentIndex(activeIndex || 0);
  }, [activeIndex]);

  // !setActiveIndex -> if the state is not controlled from outside
  const handlePrev = () => {
    if (!onHandlePrev) {
      setCurrentIndex((prevCurrentIndex) =>
        prevCurrentIndex === 0 ? slides.length - 1 : prevCurrentIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (!onHandleNext) {
      setCurrentIndex((prevCurrentIndex) =>
        prevCurrentIndex === slides.length - 1 ? 0 : prevCurrentIndex + 1
      );
    }
  };

  const handleCurrentIndex = (index: number) => {
    if (!onHandleCurrentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <section className=" overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%` }}
      >
        {slides}
      </div>

      {withPrevNext && (
        <PrevNextButtons
          onPreviousClick={onHandleNext ? onHandleNext : handlePrev}
          onNextClick={onHandlePrev ? onHandlePrev : handleNext}
          leftRightPos={leftRightPos}
        />
      )}

      <PerfectCenter
        styles={`${
          isNavBtnsBottom ? "bottom-0" : `${pos[bottomPos]}`
        } gap-2 left-1/2 absolute -translate-x-1/2`}
      >
        {slides.map((_, i) => (
          <SliderNavButton
            key={i}
            isActive={i === currentIndex}
            onClick={() => {
              if (onHandleCurrentIndex) {
                onHandleCurrentIndex(i);
              } else {
                handleCurrentIndex(i);
              }
            }}
          />
        ))}
      </PerfectCenter>
    </section>
  );
};

export default Carousel;
