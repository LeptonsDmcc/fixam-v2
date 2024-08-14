interface Props {
  shouldIndicate?: boolean;
}
const RadioIndicator = ({ shouldIndicate }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`h-3 w-3 inline-block border-[1.5px] border-gray-700 duration-200 ${
          shouldIndicate && "border-orange-400"
        }  rounded-full relative`}
      >
        <div
          className={`${
            shouldIndicate ? "opacity-1 scale-1" : "opacity-0 scale-0"
          } h-[6px] w-[6px] rounded-full bg-orange-400 absolute 
                left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
                duration-200`}
        ></div>
      </div>
    </div>
  );
};

export default RadioIndicator;
