"use client";

import AddFavoriteButton from "@/app/components/Buttons/AddFavoriteButton";
import Carousel from "@/app/components/Carousel/Carousel";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import { convertImageFromArrObj } from "@/app/lib/image-helpers";
import { WishtListType } from "@/app/lib/types";
import Image from "next/image";
import { useState } from "react";

interface Props {
  images: { [key: string]: string }[];
  alt: string;
  productId: string;
  isAuth: boolean;
  wishlist: WishtListType[];
}

const ImagePreview = ({ images, alt, productId, isAuth, wishlist }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const convertedImages = convertImageFromArrObj(images, alt);

  const onHandleNext = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === convertedImages.length - 1 ? 0 : prevActiveIndex + 1
    );
  };

  const onHandlePrev = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === 0 ? convertedImages.length - 1 : prevActiveIndex - 1
    );
  };

  const onHandleCurrentIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="max-w-[620px] relative">
      {isAuth && (
        <div className="absolute top-3 right-3 z-10">
          <AddFavoriteButton productId={productId} wishList={wishlist} />
        </div>
      )}
      <section className="border rounded-lg">
        <Carousel
          activeIndex={activeIndex}
          withPrevNext
          onHandleNext={onHandleNext}
          onHandlePrev={onHandlePrev}
          onHandleCurrentIndex={onHandleCurrentIndex}
          leftRightPos="6"
          bottomPos="6"
        >
          {convertedImages.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={610}
              height={500}
              className="rounded-lg min-w-[618px] max-h-[500px] "
            />
          ))}
        </Carousel>
      </section>
      <BaseSpacing />
      <section className="flex justify-between items-center gap-4">
        {convertedImages.map(({ src, alt }, i) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={140}
            height={140}
            className={`${
              i === activeIndex ? "border-orange-400" : ""
            } rounded-lg border
            min-w-16 md:w-[140px] md:max-h-[100px] object-contain`}
            onClick={() => {
              setActiveIndex(i);
            }}
          />
        ))}
      </section>
    </section>
  );
};

export default ImagePreview;
