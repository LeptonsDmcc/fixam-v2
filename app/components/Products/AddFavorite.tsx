import { RxHeart, RxHeartFilled } from "react-icons/rx";

interface Props {
  isFavorited: boolean;
}
const AddFavorite = ({ isFavorited }: Props) => {
  return (
    <div className="absolute right-2 top-2">
      {isFavorited ? (
        <RxHeartFilled size={24} className="text-red-600" />
      ) : (
        <RxHeart size={24} className="text-red-600" />
      )}
    </div>
  );
};

export default AddFavorite;
