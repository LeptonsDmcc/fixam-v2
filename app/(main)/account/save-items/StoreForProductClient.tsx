"use client";

import { fixamBaseUrlClient } from "@/app/lib/contants";
import fetchAll from "@/app/lib/data/fetchAll";
import { StoreType } from "@/app/lib/types";
import { useEffect, useState } from "react";

interface Props {
  storeId: string;
}

const StoreForProductClient = ({ storeId }: Readonly<Props>) => {
  const [store, setStore] = useState<StoreType>();

  useEffect(() => {
    const initStore = async () => {
      const storeRes = await fetch(`${fixamBaseUrlClient}/stores/${storeId}/`);

      const store: StoreType = await storeRes.json();
      setStore(store);
    };

    initStore();
  }, [storeId]);

  return <div className=" text-xs text-gray-400">Sold by: {store?.name}</div>;
};

export default StoreForProductClient;
