"use client";

import { removeItemToWishlistAction } from "@/actions/product";
import { fixamBaseUrlClient } from "@/app/lib/contants";
import { getCookieValueByName } from "@/app/lib/cookies";
import { WishtListType } from "@/app/lib/types";
import { revalidatePath } from "next/cache";
import { useState } from "react";
import AddToFavoriteSubmit from "./AddToFavoriteSubmit";

interface Props {
  productId: string;
  userId?: string;
  wishList: WishtListType[];
}

const AddFavoriteButton = ({
  productId,
  userId,
  wishList,
}: Readonly<Props>) => {
  const [optimisticWishList, setOptimisticWishList] =
    useState<WishtListType[]>(wishList);
  const [loading, setLoading] = useState(false); // Disable button while request is in progress

  // Check if the product is already favorited
  const isFavorited = optimisticWishList.some(
    (wish) => wish.product === productId
  );

  const toggleWishlistItem = (productId: string) => {
    // Toggle wishlist item optimistically
    if (isFavorited) {
      setOptimisticWishList((prev) =>
        prev.filter((item) => item.product !== productId)
      );
    } else {
      setOptimisticWishList((prev) => [
        ...prev,
        { product: productId, user: userId || "" },
      ]);
    }
  };

  const addItemToWishlistAction = async () => {
    if (loading) return; // Prevent multiple requests
    setLoading(true);

    // Optimistically update the wishlist
    toggleWishlistItem(productId);

    try {
      const url = `${fixamBaseUrlClient}/cart/wishlist`;

      if (isFavorited) {
        const wishlistByProdId = await fetch(`${url}/product/${productId}/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookieValueByName("auth_access")}`,
          },
        });

        const wishlistItem = await wishlistByProdId.json();
        console.log("wishlistItem", wishlistItem);
        // DELETE WISH LIST FROM CART
        await removeItemToWishlistAction.bind(null, wishlistItem.id);
        // const dRes = await fetch(`${url}/${wishlistItem.id}/`, {
        //   method: "DELETE",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${getCookieValueByName("auth_access")}`,
        //   },
        // });

        // console.log("RES", dRes);
      }

      const response = await fetch(`${url}/`, {
        method: "POST",
        body: JSON.stringify({ product: productId, user: userId }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookieValueByName("auth_access")}`,
        },
      });

      if (!response.ok) {
        // Revert optimistic update if request fails
        console.error("Failed to update wishlist");
        toggleWishlistItem(productId); // Revert the optimistic change
      }

      revalidatePath("/");
    } catch (error) {
      // Handle network errors or other issues
      console.error("Error updating wishlist:", error);
      toggleWishlistItem(productId); // Revert optimistic change in case of error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div onClick={addItemToWishlistAction}>
      {/* <AddToFavoriteSubmit isFavorited={isFavorited} disabled={loading} /> */}
      <AddToFavoriteSubmit isFavorited={isFavorited} />
    </div>
  );
};

export default AddFavoriteButton;
