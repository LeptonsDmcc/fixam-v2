import Link from "next/link";
import Heading from "../Heading";

interface Props {
  href: string;
}

const DealOfTheDayHeader = ({ href }: Props) => {
  return (
    <header className="bg-orange-600 flex justify-between items-center p-4">
      <Heading variant={"h4"} styles="text-base text-white">
        Deal of the day
      </Heading>
      <Heading
        variant={"h4"}
        styles="text-base text-white hidden 
        md:block"
      >
        Time Left: 18h : 27m : 29s
      </Heading>
      <Link href={href} className="text-base  text-white">
        See all
      </Link>
    </header>
  );
};

export default DealOfTheDayHeader;
