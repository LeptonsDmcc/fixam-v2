"use client";
import Carousel from "@/app/components/Carousel/Carousel";
import Image from "next/image";
import Space from "@/app/components/Space";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/assets/products/watch-1.jpg",
    alt: "",
  },
  {
    src: "/assets/products/watch-2.jpg",
    alt: "",
  },
  {
    src: "/assets/products/watch-3.jpg",
    alt: "",
  },
  {
    src: "/assets/products/shampoo.jpg",
    alt: "",
  },
];
const ImagePreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onHandleNext = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === images.length - 1 ? 0 : prevActiveIndex + 1
    );
    console.log(activeIndex);
  };

  const onHandlePrev = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === 0 ? images.length - 1 : prevActiveIndex - 1
    );
  };

  const onHandleCurrentIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="max-w-[620px]">
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
          {images.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={800}
              height={700}
              className="rounded-lg"
            />
          ))}
        </Carousel>
      </section>
      <Space spacing="my-12" />
      <section className="flex justify-between items-center">
        {images.map(({ src, alt }, i) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={140}
            height={140}
            className={`${
              i === activeIndex ? " border-orange-400" : ""
            } rounded-lg border`}
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
