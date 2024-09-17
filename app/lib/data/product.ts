import { WishtListType } from "../types";
import fetchAll from "./fetchAll";

export const isFavorite = async (productId: string) => {
  const wishList = await getUserWishlist();

  if (wishList && wishList.length)
    return wishList.findIndex((wish) => wish.product === productId) !== -1;

  return false;
};

export const getUserWishlist = async () => {
  const wishList = await fetchAll<WishtListType[]>(`cart/wishlist`, {
    withAuth: true,
  });

  if (wishList && wishList.length) return wishList;

  return [];
};
