import { Dispatch, ReactNode, SetStateAction } from "react";
import { ScrollType } from "../Banners/HomeBanners";
import Button from "../Buttons/Button";
import Space from "../Spacing/Space";

interface Props {
  title: string;
  text: ReactNode;
}
const BannerContent = ({ title, text }: Props) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/20">
      <Space spacing="my-6" />
      <div
        className="absolute  py-5 px-6 
        top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2
        md:bg-remove w-[80%] m-auto text-center "
      >
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
      </div>
    </div>
  );
};

export default BannerContent;
