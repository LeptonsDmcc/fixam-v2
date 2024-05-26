import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export type LeftRightPosType = "6" | "36";

interface Props {
  onPreviousClick: () => void;
  onNextClick: () => void;
  leftRightPos?: LeftRightPosType;
}

const PrevNextButtons = ({
  onPreviousClick,
  onNextClick,
  leftRightPos = "36",
}: Props) => {
  const pos = {
    6: "left-6 right-6",
    36: "left-36 right-36",
  };

  return (
    <div
      className={`${pos[leftRightPos]} absolute top-1/2 -translate-y-1/2  flex justify-between`}
    >
      <button
        onClick={onPreviousClick}
        className="p-3 rounded-full hover:scale-105 hover:bg-gray-50 bg-orange-100 duration-200"
      >
        <BsChevronLeft size={30} />
      </button>
      <button
        onClick={onNextClick}
        className="p-3 rounded-full hover:scale-105 hover:bg-gray-50 bg-orange-100 duration-200"
      >
        <BsChevronRight size={30} />
      </button>
    </div>
  );
};

export default PrevNextButtons;
