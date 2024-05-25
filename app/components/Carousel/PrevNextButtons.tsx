import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const PrevNextButtons = ({ onPreviousClick, onNextClick }: Props) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-36 right-36 flex justify-between">
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
