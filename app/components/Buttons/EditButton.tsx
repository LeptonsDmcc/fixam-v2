import { Edit2 } from "iconsax-react";
import React from "react";

interface Props {
  onClick?: () => void;
}

const EditButton = ({ onClick }: Readonly<Props>) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[6px] text-orange-400"
    >
      <span>Edit</span>
      <Edit2 />
    </button>
  );
};

export default EditButton;
