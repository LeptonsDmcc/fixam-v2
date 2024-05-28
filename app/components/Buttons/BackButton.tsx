"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

interface Props {}
const BackButton = ({ children }: PropsWithChildren<Props>) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-orange-400 gap-1 text-sm
             hover:text-orange-600"
    >
      <span>{children}</span> <BiArrowBack size={18} />
    </button>
  );
};

export default BackButton;
