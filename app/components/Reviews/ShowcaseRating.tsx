import { Star1 } from "iconsax-react";
import StarFill from "../Icons/svgs/StarFill";

interface Props {
  rating: number;
}

const ShowcaseRating = ({ rating }: Props) => {
  const remainder = 5 - rating;

  return (
    <div className="text-orange-400 flex gap-1 text-base">
      {Array.from({ length: rating }, (_, i) => (
        <StarFill key={i} />
      ))}

      {Array.from({ length: remainder }, (_, i) => (
        <Star1 key={i} size={16} />
      ))}
    </div>
  );
};

export default ShowcaseRating;
