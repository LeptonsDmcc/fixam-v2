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
    <article className=" flex items-center justify-center flex-col w-max">
      <figure className="text-center bg-gray-100 rounded-md h-36 w-40 flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          height={100}
          width={100}
          className="object-cover"
        />
      </figure>
      {label && <figcaption className="my-2 w-max">{label}</figcaption>}
    </article>
  );
};

export default CategoryImage;
