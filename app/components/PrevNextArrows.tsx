import { TfiArrowCircleLeft } from "react-icons/tfi";

const PrevNextArrows = () => {
  return (
    <>
      <div className="absolute left-2 top-[50%] -translate-y-1/2 cursor-pointer hover:scale-105 duration-300">
        <TfiArrowCircleLeft size={50} className="text-black/60" />
      </div>

      <div className="absolute rotate-180 right-2 top-[50%] -translate-y-1/2 cursor-pointer hover:scale-105 duration-300">
        <TfiArrowCircleLeft size={50} className="text-black/60" />
      </div>
    </>
  );
};

export default PrevNextArrows;
