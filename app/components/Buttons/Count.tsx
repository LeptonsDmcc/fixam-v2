interface Props {
  isMobile?: boolean;
  itemCount: number;
}
const Count = ({ isMobile, itemCount }: Props) => {
  return (
    <span
      className={`${
        isMobile
          ? "top-0 right-0 bg-orange-600"
          : "bg-orange-400 top-[-2px] right-[-3px]"
      }
          absolute text-white
          text-xs font-medium leading-none py-[2px] px-[4px] rounded-full
        `}
    >
      {itemCount}
    </span>
  );
};

export default Count;
