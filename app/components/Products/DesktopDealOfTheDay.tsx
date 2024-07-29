import { ProductType } from "@/app/lib/types";
import Carousel from "../Carousel/Carousel";
import DealOfTheDayHeader from "./DealOfTheDayHeader";
import DealOfTheDayProduct from "./DealOfTheDayProduct";

interface Props {
  productsDayDeal: ProductType[];
  href: string;
}

const DesktopDealOfTheDay = ({ productsDayDeal, href }: Props) => {
  return (
    <section className="hidden lg:block">
      <DealOfTheDayHeader href={href} />
      <Carousel withPrevNext isNavBtnsBottom>
        {productsDayDeal.map((product) => (
          <DealOfTheDayProduct product={product} />
        ))}
      </Carousel>
    </section>
  );
};

export default DesktopDealOfTheDay;
