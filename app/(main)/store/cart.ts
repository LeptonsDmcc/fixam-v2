import { fixamBaseUrlClient } from "@/app/lib/contants";
import { getCookieValueByName } from "@/app/lib/cookies";
import { CartItemType, ProductType } from "@/app/lib/types";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

export const getClientAuthToken = () => getCookieValueByName("auth_access");

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
      // Previous items before update
      const prevCartItems = get().cartItems;

      // Update cart items
      set((store) => {
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
      // Previous items before update
      const prevCartItems = [...get().cartItems];

      // Incoming item has no ID so Generate id for item in memory
      const itemId = uuidv4();
      const newCartItem = { id: itemId, ...item };

      // Get cart items from store
      const cartItems = [...get().cartItems];

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

      set((store) => {
        // If user is not authenticated, update items locally
        if (!isAuth) updateLocalStorageCartItems(cartItems);

        return { ...store, cartItems };
      });

      // User is authenticated
      if (isAuth) {
        // Send request to save cart item
        const savedItem = await addItemToUserCart(item);
        console.log("Saved Item to USER Cart", savedItem);

        if (savedItem) {
          // Update the item id to the item id stored in DB
          const updatedCartItems = cartItems.map((item: CartItemType) => {
            if (item.id === newCartItem.id) {
              console.log("FOUND ITEM THAT WAS JUST ADDED", item);
              return { ...item, id: savedItem.id };
            }
            return item;
          });

          console.log("updatedCartItems", updatedCartItems);
          set((store) => ({ ...store, cartItems: updatedCartItems }));
        } else {
          console.log("FAILED TO ADD ITEM TO CART");
          // If fetch fails revert
          set((store) => ({ ...store, cartItems: prevCartItems }));
        }
      }
    },
  };
});

const updateLocalStorageCartItems = (cartItems: CartItemType[]) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const updateUserCartItemQuantity = async (itemId: string, quantity: number) => {
  const accessToken = getClientAuthToken();
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
  const newItem = {
    product: item.prod_id,
    quantitty: item.quantity,
  };

  const accessToken = getClientAuthToken();
  try {
    const savedData = await fetch(`${fixamBaseUrlClient}/cart/items/`, {
      body: JSON.stringify(newItem),
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const result = await savedData.json();

    // Return true if everything went well
    return result;
  } catch (error) {
    console.log("Error updating CART ITEM", error);
    // Return false on error
    return undefined;
  }
};

const deleteUserCartItem = async (itemId: string) => {
  const accessToken = getClientAuthToken();
  console.log("itemId", itemId);
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

export default useCartStore;
