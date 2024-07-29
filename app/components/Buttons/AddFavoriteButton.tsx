import { RxHeart, RxHeartFilled } from "react-icons/rx";

interface Props {
  isFavorited: boolean;
}
const AddFavoriteButton = ({ isFavorited }: Props) => {
  return (
    <>
      {isFavorited ? (
        <RxHeartFilled size={24} className="text-red-600" />
      ) : (
        <RxHeart size={24} className="text-red-600" />
      )}
    </>
  );
};

export default AddFavoriteButton;
