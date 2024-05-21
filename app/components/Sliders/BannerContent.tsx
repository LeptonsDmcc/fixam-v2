import { Dispatch, ReactNode, SetStateAction } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { ScrollType } from "../Banners/HomeBanners";
import Button from "../Buttons/Button";
import PerfectCenter from "../PerfectCenter";
import Space from "../Space";
import SliderNavButton from "./SliderNavButton";
import { TfiArrowCircleLeft } from "react-icons/tfi";

interface Props {
  title: string;
  text: ReactNode;
  scrollTo: (to: ScrollType) => void;
  activeSlider: number;
  setActiveSlider: Dispatch<SetStateAction<number>>;
}
const BannerContent = ({
  title,
  text,
  scrollTo,
  activeSlider,
  setActiveSlider,
}: Props) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/20">
      <Space spacing="my-6" />
      <div
        className="absolute  py-5 px-6 
    top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2
    md:bg-remove w-[80%] m-auto text-center "
      >
        <div>
          <div
            onClick={() => scrollTo({ nextPrev: "PREV" })}
            className="absolute left-0 top-[50%] -translate-y-1/2 cursor-pointer hover:scale-105 duration-300"
          >
            <TfiArrowCircleLeft size={60} className="text-white" />
          </div>

          <div
            onClick={() => scrollTo({ nextPrev: "NEXT" })}
            className="absolute rotate-180 right-0 top-[50%] -translate-y-1/2 cursor-pointer hover:scale-105 duration-300"
          >
            <TfiArrowCircleLeft size={60} className="text-white" />
          </div>
        </div>

        <div className="flex justify-center">
          <h2
            className="banner-title w-[70%]
              text-white font-semibold text-4xl/[48px] mb-[10px]"
          >
            {title}
          </h2>
        </div>

        <Space spacing="my-6" />

        <p
          className="banner-text hidden
          text-white font-semibold w-[60%] m-auto text-xl/10
            sm:block sm:text-base sm:font-medium sm:mb-[10px]"
        >
          {text}
        </p>

        <Space spacing="my-6" />

        <div className="flex justify-center">
          <Button>Shop now</Button>
        </div>

        <Space spacing="my-6" />

        <PerfectCenter styles="gap-2">
          <SliderNavButton
            onClick={() => {
              scrollTo({ to: -2400 });
              setActiveSlider(-2400);
            }}
            isActive={activeSlider === -2400}
          />
          <SliderNavButton
            onClick={() => {
              scrollTo({ to: 800 });
              setActiveSlider(800);
            }}
            isActive={activeSlider === 800}
          />
          <SliderNavButton
            onClick={() => {
              scrollTo({ to: 2400 });
              setActiveSlider(2400);
            }}
            isActive={activeSlider === 2400}
          />
        </PerfectCenter>
      </div>
    </div>
  );
};

export default BannerContent;
