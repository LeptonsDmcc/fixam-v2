"use server";

import fetchAll from "@/app/lib/data/fetchAll";
import getAuthUser from "@/app/lib/data/user";
import { deleteData, postData } from "@/app/lib/services/apiClient";
import { revalidatePath } from "next/cache";

export const toggleFavoriteAction = async (data: {
  productId: string;
  is_favorited: boolean;
}) => {
  const wishListItem = await fetchAll(`cart/wishlist/${data.productId}`, {
    withAuth: true,
  });

  const user = await getAuthUser();

  if (wishListItem) {
    // Update
  } else {
    // Add to wishlist
    await addItemToWishlistAction({
      product: data.productId,
      user: user!.id,
    });
  }
};

const addItemToWishlistAction = async (item: {
  product: string;
  user: string;
}) => {
  const postedData = await postData(`cart/wishlist`, item, {
    withAuth: true,
  });
  revalidatePath("/");
};

export const removeItemToWishlistAction = async (wishlistItemId: string) => {
  const postedData = await deleteData(`cart/wishlist/${wishlistItemId}`, {
    withAuth: true,
  });

  console.log("REMOVED ITEM", postedData);
  revalidatePath("/");
};
