import { fixamBaseUrlClient } from "../contants";
import { postData } from "../services/apiClient";
import { CartItemType } from "../types";

export const getLocalCart = () => {
  if (typeof window !== "undefined") {
    const cartFromLocalStorage = localStorage.getItem("cart");

    if (!cartFromLocalStorage) return [];

    return JSON.parse(cartFromLocalStorage);
  }
  return undefined;
};

export const initializeCartStore = async (
  isAuth: boolean,
  accessToken: string
) => {
  if (typeof window === "undefined") {
    // We're on the server, localStorage is not available
    return [];
  }

  // If user is not authenticated, return the cart from local storage
  if (!isAuth) {
    return getLocalCart(); // This is a synchronous call
  }

  // User is authenticated, proceed with fetching the cart from the server
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  // Merge the data from local storage if it exists to the user's cart
  let cartItemData = getLocalCart();

  if (cartItemData && cartItemData.length) {
    const cartItems = cartItemData.map((item: CartItemType) => ({
      quantity: item.quantity,
      product: item.prod_id,
    }));

    try {
      // Perform async operations here
      const postResponse = await fetch(`${fixamBaseUrlClient}/cart/`, {
        body: JSON.stringify(cartItems),
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
      });

      const postResult = await postResponse.json();

      if (
        postResult.detail &&
        postResult.detail.includes("You already have a cart.")
      ) {
        const putResponse = await fetch(`${fixamBaseUrlClient}/cart/`, {
          body: JSON.stringify({ items: cartItems }),
          method: "PUT",
          headers: { ...headers, "Content-Type": "application/json" },
        });

        const putResult = await putResponse.json();
        console.log("CART MERGING RESULT", putResult);
      }

      const fetchCartResponse = await fetch(`${fixamBaseUrlClient}/cart/`, {
        headers,
      });

      const fetchCartResult = await fetchCartResponse.json();

      if (fetchCartResult.items && fetchCartResult.items.length) {
        cartItemData = await Promise.all(
          fetchCartResult.items.map(
            async (item: { product: string; quantity: number }) => {
              const productResponse = await fetch(
                `${fixamBaseUrlClient}/products/${item.product}/`
              );
              const product = await productResponse.json();

              return {
                prod_id: item.product,
                quantity: item.quantity,
                price: product.selling_price,
              };
            }
          )
        );

        clearLocalCart(); // Synchronously clear the local storage
      }

      return cartItemData;
    } catch (error) {
      console.error("Error initializing cart store:", error);
      return [];
    }
  } else {
    // If no items in local storage, fetch the user's cart directly
    try {
      const fetchCartResponse = await fetch(`${fixamBaseUrlClient}/cart/`, {
        headers,
      });

      const fetchCartResult = await fetchCartResponse.json();

      if (fetchCartResult.items && fetchCartResult.items.length) {
        cartItemData = await Promise.all(
          fetchCartResult.items.map(
            async (item: { product: string; quantity: number; id: string }) => {
              const productResponse = await fetch(
                `${fixamBaseUrlClient}/products/${item.product}/`
              );
              const product = await productResponse.json();

              return {
                id: item.id,
                prod_id: item.product,
                quantity: item.quantity,
                price: product.selling_price,
              };
            }
          )
        );
      }

      return cartItemData;
    } catch (error) {
      console.error("Error fetching user cart:", error);
      return [];
    }
  }
};

export const clearLocalCart = () => {
  localStorage.removeItem("cart");
};
