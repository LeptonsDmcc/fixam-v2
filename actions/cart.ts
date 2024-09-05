"use server";

import getAuthUser from "@/app/lib/data/user";
import { deleteData, postData } from "@/app/lib/services/apiClient";
import { CartItemType, CartType } from "@/app/lib/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addItemToCartAction = async (productId: string) => {
  const user = await getAuthUser();
  const isAuth = user !== null;

  // Create item
  const item: CartItemType = {
    prod_id: productId,
    // TODO: Check for item variation options
    quantity: 1,
  };

  // Check if user is authenticated
  if (isAuth) {
    try {
      // Find user cart with user id
      const foundUserCartRes = await fetch(`/carts/user/${user.id}/`);
      const foundUserCart: CartType = await foundUserCartRes.json();

      // Check if the user already has a cart
      if (foundUserCartRes.status == 200) {
        // Add item to the cart
        await postData(`carts/${foundUserCart.id}/items`, item);
        revalidateTag("cart");
      }

      if (foundUserCartRes.status === 404) {
        // No Cart Found - Create a New Cart

        // Use userId to create new cart
        const newCartForUser = await postData<CartType, { user_id: string }>(
          `carts/`,
          {
            user_id: user.id,
          }
        );

        // Add item to newCartForUser
        await postData(`carts/${newCartForUser.id}/items`, item);

        revalidateTag("cart");
      }
    } catch (error) {
      console.log("ERRROROR", error);
    }
  } else {
    // If user is not authenticated
    // Check for cartId in cookie
    const cartIdFromCookie = cookies().get("cartId");

    console.log("USER IS NOT AUTH");
    console.log("cartIdFromCookie", cartIdFromCookie);

    if (cartIdFromCookie) {
      // Use the cartId in cookie to find a cart by it's cartId
      const foundCartWithCartId = await await fetch(
        `/carts/${cartIdFromCookie}/`
      );

      if (foundCartWithCartId.status == 200) {
        // Add Items to cart
        await postData(`carts/${cartIdFromCookie}/items`, item);
        revalidateTag("cart");
      }
    } else {
      // There is no cartId in cookie and user is not authenticated
      // Create guest user cart without user_id
      try {
        const createdCart = await postData<
          CartType,
          { user_id: string | null }
        >(`carts/`, {
          user_id: null,
        });

        cookies().set("cartId", createdCart.id || "");

        // Add item to newCartForUser
        await postData(`carts/${createdCart.id}/items`, item);

        revalidateTag("cart");
      } catch (err) {
        revalidateTag("cart");
      }
    }
  }

  revalidateTag("cart");
};

export const addItemToWishlist = async (productId: string, userId: string) => {
  await postData(`carts/carts/wishlist`, {
    user_id: userId,
    product_id: productId,
  });

  revalidateTag("wishlist");
};

export const removeFromWishlist = async (wishlistId: string) => {
  await deleteData(`carts/carts/wishlist/${wishlistId}/`);
  revalidateTag("wishlist");
};
