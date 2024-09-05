import SeeAllButton from "../Buttons/SeeAllButton";
import Space from "../Spacing/Space";

interface Props {
  title: string;
  noSeeAll?: boolean;
  href?: string;
}

const ProductTitleBar = ({ title, href, noSeeAll }: Props) => {
  return (
    <section>
      <header className="flex justify-between">
        <span className=" text-xl font-semibold text-gray-900">{title}</span>
        {!noSeeAll && <SeeAllButton href={href || ""} />}
      </header>
      <Space spacing={"my-[40px]"} />
    </section>
  );
};

export default ProductTitleBar;
