import { LinkType } from "@/app/lib/types";
import Heading from "../Heading";
import Space from "../Spacing/Space";
import Link from "next/link";

interface Props {
  title: string;
  menus: LinkType[];
}
const FooterMenu = ({ title, menus }: Props) => {
  return (
    <section>
      <Heading
        variant="h4"
        styles="text-orange-400 text-[20px]/32 font-semibold"
      >
        {title}
      </Heading>
      <Space spacing="my-[36px]" />
      <ul>
        {menus.map(({ to, text }) => (
          <li className="text-gray-300 my-6">
            <Link href={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterMenu;
