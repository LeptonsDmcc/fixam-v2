interface Props {
  isActive?: boolean;
  onClick?: () => void;
}
const SliderNavButton = ({ isActive, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "bg-orange-400" : "bg-gray-300"
      } w-[30px] h-[6px] rounded-md cursor-pointer`}
    ></button>
  );
};

export default SliderNavButton;
