import { Heart } from "iconsax-react";

interface Props {
  isFavorited: boolean;
}
const AddFavoriteButton = ({ isFavorited }: Props) => {
  return (
    <div className="flex justify-center items-center rounded-full h-7 w-7 p-1 bg-gray-200">
      <Heart
        variant={isFavorited ? "Bold" : "Outline"}
        size={24}
        className="text-red-600"
      />
    </div>
  );
};

export default AddFavoriteButton;
