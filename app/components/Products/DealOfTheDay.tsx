import { ProductType } from "@/app/lib/types";
import DesktopDealOfTheDay from "./DesktopDealOfTheDay";
import MobileDealOfTheDay from "./MobileDealOfTheDay";
import { getRandomUniqueElements } from "@/app/lib/randomValues";

interface Props {
  href: string;
}
const DealOfTheDay = async ({ href }: Props) => {
  let productsDayDeal: ProductType[] = [];

  try {
    const latestProdsRes = await fetch(
      `${process.env.FIXAM_BASE_URL}/products/`,
      {
        next: {
          revalidate: 10,
        },
      }
    );
    // `${process.env.FIXAM_BASE_URL}/products/deal_of_the_day/

    if (!latestProdsRes.ok) {
      throw Error("Something went wrong!");
    }

    const latestProdsJsonRes = await latestProdsRes.json();

    productsDayDeal = getRandomUniqueElements(latestProdsJsonRes.results, 5);
  } catch (error) {
    throw error;
  }

  if (productsDayDeal.length)
    return (
      <>
        <DesktopDealOfTheDay href={href} productsDayDeal={productsDayDeal} />
        <MobileDealOfTheDay href={href} productsDayDeal={productsDayDeal} />
      </>
    );
};

export default DealOfTheDay;
