import { Dispatch, ReactNode, SetStateAction } from "react";
import { ScrollType } from "../Banners/HomeBanners";
import Button from "../Buttons/Button";
import Space from "../Spacing/Space";
import Heading from "../Heading";

interface Props {
  title: string;
  text: ReactNode;
}
const BannerContent = ({ title, text }: Props) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/20">
      <Space spacing="my-6" />
      <div
        className="absolute py-5 w-full
        md:top-[50%] md:-translate-y-1/2 md:left-[50%] 
        md:-translate-x-1/2 md:bg-remove md:text-center 
        md:px-6 md:w-[80%] md:m-auto"
      >
        <div className="flex justify-center">
          <Heading
            variant="h3"
            styles="banner-title 
              text-white font-semibold md:text-4xl/[48px] mb-[10px]
              md:w-[70%] text-center"
          >
            {title}
          </Heading>
        </div>

        <Space spacing="my-6" />

        <p
          className="banner-text hidden
          text-white font-semibold m-auto text-xl/10
            sm:block sm:text-base sm:font-medium sm:mb-[10px]
            md:w-[60%]"
        >
          {text}
        </p>

        <Space spacing="my-6" />

        <div className="flex justify-center">
          <Button>Shop now</Button>
        </div>

        <Space spacing="my-6" />
      </div>
    </div>
  );
};

export default BannerContent;
