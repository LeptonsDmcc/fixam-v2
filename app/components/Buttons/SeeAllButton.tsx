import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";

interface Props {
  noArrow?: boolean;
  href: string;
}
const SeeAllButton = ({ noArrow, href }: Props) => {
  return (
    <Link
      href={href}
      className="group text-orange-400 flex gap-2 items-center hover:opacity-60 duration-300"
    >
      <span>See All</span>
      {!noArrow && (
        <HiOutlineChevronRight
          size={20}
          className=" group-hover:opacity-60 duration-300"
        />
      )}
    </Link>
  );
};

export default SeeAllButton;
