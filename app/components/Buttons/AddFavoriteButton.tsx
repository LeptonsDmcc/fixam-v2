import { RxHeart, RxHeartFilled } from "react-icons/rx";
import IconHolder from "../Icons/IconHolder";

interface Props {
  isFavorited: boolean;
}
const AddFavoriteButton = ({ isFavorited }: Props) => {
  return (
    <IconHolder>
      {isFavorited ? (
        <RxHeartFilled size={24} className="text-red-600" />
      ) : (
        <RxHeart size={24} className="text-red-600" />
      )}
    </IconHolder>
  );
};

export default AddFavoriteButton;
