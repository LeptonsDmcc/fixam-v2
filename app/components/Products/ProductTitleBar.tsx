import { HiOutlineChevronRight } from "react-icons/hi";
import Space from "../Space";

interface Props {
  title: string;
}
const ProductTitleBar = ({ title }: Props) => {
  return (
    <section>
      <header className="flex justify-between">
        <span className=" text-xl font-semibold text-gray-900">{title}</span>
        <button className="group text-orange-400 flex gap-2 items-center hover:opacity-60 duration-300">
          <span>See All</span>
          <HiOutlineChevronRight
            size={20}
            className=" group-hover:opacity-60 duration-300"
          />
        </button>
      </header>
      <Space spacing={"my-[40px]"} />
    </section>
  );
};

export default ProductTitleBar;
