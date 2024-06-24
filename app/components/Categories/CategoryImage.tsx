import { PropsWithChildren } from "react";
import PerfectCenter from "../PerfectCenter";
import Image from "next/image";
import { ImageType } from "@/app/lib/types";

interface Props {
  image: ImageType;
  label?: string;
}

const CategoryImage = ({ image: { src, alt }, label }: Props) => {
  return (
    <article
      className="flex items-center justify-center flex-col
     w-max"
    >
      <figure
        className="text-center bg-gray-100 rounded-md flex items-center 
        justify-center h-36 w-32
        md:h-36 md:w-40"
      >
        <Image
          src={src}
          alt={alt}
          height={100}
          width={100}
          className=" w-20 h-20
          md:w-24 md:h-24 md:object-cover"
        />
      </figure>
      {label && <figcaption className="my-2 w-max">{label}</figcaption>}
    </article>
  );
};

export default CategoryImage;
