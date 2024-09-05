import { CartItemType } from "@/app/lib/types";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { getLocalCart } from "@/app/lib/data/cart";
import { fixamBaseUrlClient } from "@/app/lib/contants";

interface CartStore {
  addItem: (item: CartItemType, isAuth?: boolean) => void;
  removeItem: (itemId: string, isAuth?: boolean) => void;
  incrementQuantity: (itemId: string, isAuth?: boolean) => void;
  decrementQuantity: (itemId: string, isAuth?: boolean) => void;
  cartItems: CartItemType[];
  initializeCartItems: (cartItems: CartItemType[]) => void;
}

const useCartStore = create<CartStore>((set, get) => {
  return {
    cartItems: [],
    // getLocalCart(),
    initializeCartItems: (cartItems) => {
      return set((store) => ({ ...store, cartItems }));
    },
    // decrementQuantity: (itemId, isAuth) => {
    //   set((store) => {
    //     const prevState = store;
    //     const updatedItems = store.cartItems.map((item) => {
    //       if (item.id === itemId) {
    //         return {
    //           ...item,
    //           quantity: item.quantity - 1,
    //         };
    //       }
    //       return item;
    //     });

    //     if (!isAuth) {
    //       updateLocalStorageCartItems(updatedItems);
    //     } else {
    //       const foundItem = updatedItems.find((item) => item.id === itemId);
    //       if (foundItem) {
    //         const isSuccess = updateUserCartItemQuantity(
    //           itemId,
    //           foundItem.quantity
    //         );
    //         if (!isSuccess) {
    //           console.log("NOT SUCCESS", isSuccess);
    //           return { ...prevState };
    //         }
    //       }
    //     }

    //     return {
    //       ...store,
    //       cartItems: updatedItems,
    //     };
    //   });
    // },
    decrementQuantity: async (itemId, isAuth) => {
      // Update the state immediately for a more responsive UI
      set((store) => {
        const updatedItems = store.cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );

        if (!isAuth) {
          updateLocalStorageCartItems(updatedItems);
        }

        return { ...store, cartItems: updatedItems };
      });

      if (isAuth) {
        // Get the item that was just updated
        const foundItem = get().cartItems.find((item) => item.id === itemId);
        if (foundItem) {
          // Send request to update the quantity
          const isSuccess = await updateUserCartItemQuantity(
            itemId,
            foundItem.quantity
          );

          if (!isSuccess) {
            // If the API call fails, revert the change
            set((store) => {
              const revertedItems = store.cartItems.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );

              return { ...store, cartItems: revertedItems };
            });
          }
        }
      }
    },

    incrementQuantity: async (itemId, isAuth) => {
      set((store) => {
        const updatedItem = store.cartItems.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

        if (!isAuth) updateLocalStorageCartItems(updatedItem);

        return {
          ...store,
          cartItems: updatedItem,
        };
      });

      if (isAuth) {
        // Get the item that was just updated
        const foundItem = get().cartItems.find((item) => item.id === itemId);
        if (foundItem) {
          // Send request to update the quantity
          const isSuccess = await updateUserCartItemQuantity(
            itemId,
            foundItem.quantity
          );

          if (!isSuccess) {
            // If the API call fails, revert the change
            set((store) => {
              const revertedItems = store.cartItems.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              );

              return { ...store, cartItems: revertedItems };
            });
          }
        }
      }
    },

    removeItem: async (itemId: string, isAuth) => {
      let prevCartItems: CartItemType[];

      // Update cart items
      set((store) => {
        prevCartItems = store.cartItems;
        const updatedCartItems = store.cartItems.filter(
          (item) => item.id !== itemId
        );

        if (!isAuth) updateLocalStorageCartItems(updatedCartItems);

        return {
          ...store,
          cartItems: updatedCartItems,
        };
      });

      if (isAuth) {
        // Send request to delete cart item
        const isSuccess = await deleteUserCartItem(itemId);
        if (!isSuccess) {
          // If the API call fails, revert the change
          set((store) => {
            return { ...store, cartItems: prevCartItems };
          });
        }
      }
    },

    addItem: async (item: CartItemType, isAuth) => {
      // Incoming item has no ID so Generate id for in memory cart
      const itemId = uuidv4();
      const newCartItem = { id: itemId, ...item };

      // Get cart items from local storage
      const cartItems = get().cartItems;

      // Check if item already exists
      const itemIndex = cartItems.findIndex(
        (cartItem) => cartItem.prod_id === item.prod_id
      );

      if (itemIndex > -1) {
        // Update quantity if item exists
        cartItems[itemIndex].quantity += item.quantity;
      } else {
        // Add new item
        cartItems.push(newCartItem);
      }

      let prevCartItems: CartItemType[];
      set((store) => {
        prevCartItems = store.cartItems;

        if (!isAuth) updateLocalStorageCartItems(cartItems);

        return { ...store, cartItems };
      });

      if (isAuth) {
        // Send request to save cart item
        const savedItem = addItemToUserCart(item);
        // If fetch fails
      }
    },
  };
});

const updateLocalStorageCartItems = (cartItems: CartItemType[]) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const updateUserCartItemQuantity = async (itemId: string, quantity: number) => {
  const accessToken = getCookieValueByName("auth_access");
  try {
    const updateUserCart = await fetch(
      `${fixamBaseUrlClient}/cart/items/${itemId}/`,
      {
        body: JSON.stringify({ quantity: quantity }),
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = updateUserCart.json();

    console.log("CartItem Updated", result);
    // Return true if everything went well
    return true;
  } catch (error) {
    console.log("Error updating CART ITEM", error);
    // Return false on error
    return false;
  }
};

const addItemToUserCart = async (item: CartItemType) => {
  console.log("ITEM TO ADD", item);

  return;

  const accessToken = getCookieValueByName("auth_access");
  try {
    const savedData = await fetch(`${fixamBaseUrlClient}/cart/items/`, {
      body: JSON.stringify(item),
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const result = savedData.json();

    console.log("Added Item to Cart", result);
    // Return true if everything went well
    return result;
  } catch (error) {
    console.log("Error updating CART ITEM", error);
    // Return false on error
    return undefined;
  }
};

const deleteUserCartItem = async (itemId: string) => {
  const accessToken = getCookieValueByName("auth_access");
  try {
    await fetch(`${fixamBaseUrlClient}/cart/items/${itemId}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    // Return true if everything went well
    return true;
  } catch (error) {
    console.log("Error updating CART ITEM", error);
    // Return false on error
    return false;
  }
};

// Utility function to get a specific cookie value by name
const getCookieValueByName = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
  return null;
};

// export const getCookie = (name: string): string | null => {
//   const cookies = document.cookie.split("; ");

//   for (const cookie of cookies) {
//     const [cookieName, cookieValue] = cookie.split("=");

//     if (cookieName === name) {
//       return decodeURIComponent(cookieValue);
//     }
//   }

//   return null;
// };

export default useCartStore;
