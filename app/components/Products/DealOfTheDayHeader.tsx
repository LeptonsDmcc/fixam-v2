import Link from "next/link";
import Heading from "../Heading";

const DealOfTheDayHeader = () => {
  return (
    <header className="bg-orange-600 flex justify-between items-center p-4">
      <Heading variant={"h4"} styles="text-base text-white">
        Deal of the day
      </Heading>
      <Heading variant={"h4"} styles="text-base text-white">
        Time Left: 18h : 27m : 29s
      </Heading>
      <Link href={""} className="text-base  text-white">
        See all
      </Link>
    </header>
  );
};

export default DealOfTheDayHeader;
