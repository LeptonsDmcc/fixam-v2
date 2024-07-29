import { ProductType } from "@/app/lib/types";
import DesktopDealOfTheDay from "./DesktopDealOfTheDay";
import MobileDealOfTheDay from "./MobileDealOfTheDay";
import { getRandomUniqueElements } from "@/app/lib/randomValues";

interface Props {
  href: string;
}
const DealOfTheDay = async ({ href }: Props) => {
  const latestProdsRes = await fetch(`${process.env.FIXAM_BASE_URL}/products/`);
  // `${process.env.FIXAM_BASE_URL}/products/deal_of_the_day/
  const latestProdsJsonRes = await latestProdsRes.json();
  const productsDayDeal: ProductType[] = getRandomUniqueElements(
    latestProdsJsonRes.results,
    5
  );

  return (
    <>
      <DesktopDealOfTheDay href={href} productsDayDeal={productsDayDeal} />
      <MobileDealOfTheDay href={href} productsDayDeal={productsDayDeal} />
    </>
  );
};

export default DealOfTheDay;
