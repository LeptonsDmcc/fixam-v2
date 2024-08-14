interface Props {
  isMobile?: boolean;
}
const Count = ({ isMobile }: Props) => {
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
      1
    </span>
  );
};

export default Count;
