import fetchAll from "@/app/lib/data/fetchAll";
import { StoreType } from "@/app/lib/types";

interface Props {
  storeId: string;
}

const StoreForProduct = async ({ storeId }: Readonly<Props>) => {
  const store = await fetchAll<StoreType>(`stores/${storeId}`);

  return <p className=" text-xs text-gray-400">Sold by: {store?.name}</p>;
};

export default StoreForProduct;
