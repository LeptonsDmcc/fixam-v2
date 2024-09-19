"use client";

import { Heart } from "iconsax-react";
import { useFormStatus } from "react-dom";
import Spin from "../Animations/Spin";

const AddToFavoriteSubmit = ({ isFavorited }: { isFavorited: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <button className="flex justify-center items-center rounded-full h-7 w-7 p-1 bg-gray-200">
      {/* {pending ? (
        <Spin />
      ) : ( */}
      <Heart
        variant={isFavorited ? "Bold" : "Outline"}
        size={24}
        className="text-red-600"
      />
      {/* )} */}
    </button>
  );
};

export default AddToFavoriteSubmit;
