import { Dispatch, ReactNode, SetStateAction } from "react";
import Space from "../Spacing/Space";
import Link from "next/link";

import Image from "next/image";
import BannerContent from "./BannerContent";
import { ScrollType } from "../Banners/HomeBanners";

interface Props {
  title: string;
  text: ReactNode;
  image: string;
}

const SliderItem = ({ image, title, text }: Props) => {
  return (
    <div
      className=" relative min-w-full max-h-[450px] overflow-hidden scroll-snap-align-start
      aspect-square sm:aspect-4-2 md:aspect-auto md:h-[350px]
      lg:h-[380px]
      2xl:h-[450px] "
    >
      <Image
        fill
        src={image}
        alt={title.toLowerCase()}
        className="banner-img
        
        w-full h-full object-cover object-right

       xl:last:object-top"
      />
      <BannerContent title={title} text={text} />
    </div>
  );
};

export default SliderItem;
