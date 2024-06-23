import { create } from "zustand";
import { Basket, BasketItem } from "../../entities/Basket";
import { createJSONStorage, persist } from "zustand/middleware";
import roundNumber from "../../helpers/roundNumber";
import encryptedStorage from "../../helpers/encryptedStorage";

interface BasketState {
  basket: Basket;
  addToBasket: (product: BasketItem["product"]) => void;
  removeFromBasket: (product: BasketItem["product"]) => void;
  clearBasket: () => void;
}

const useBasketStore = create<BasketState>()(
  persist( // persist the basket in localStorage
    (set) => ({
      basket: { items: [], items_count: 0, total: 0 },
      addToBasket: (product) => {
        set((state) => {
          const existingItem = state.basket.items.find((item) => item.product._id === product._id);
          let updatedItems;
      
          // if the item is not in the basket, add it
          if (!existingItem) {
            updatedItems = [
              ...state.basket.items,
              { product, quantity: 1 }
            ];
          } else { // if the item is already in the basket, increase the quantity
            updatedItems = state.basket.items.map((item) =>
              item.product._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
      
          // update the total
          const total = updatedItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

          // update the items count
          const items_count = updatedItems.reduce((total, item) => total + item.quantity, 0);
      
          return {
            basket: {
              ...state.basket,
              items: updatedItems,
              items_count,
              total: roundNumber(total)
            }
          };
        });
      },
      removeFromBasket: (product) => {
        set((state) => {
          const existingItem = state.basket.items.find((item) => item.product._id === product._id);
          
          // if the item is not in the basket, do nothing
          if (!existingItem) {
            return state;
          }
      
          let updatedItems = state.basket.items;
      
          // if the item is in the basket and the quantity is more than 1, decrease the quantity
          if (existingItem.quantity > 1) {
            updatedItems = updatedItems.map((item) =>
              item.product._id === product._id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
          } else { // if the quantity is 1, remove the item from the basket
            updatedItems = updatedItems.filter((item) => item.product._id !== product._id);
          }
      
          // update the total
          const total = updatedItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

          // update the items count
          const items_count = updatedItems.reduce((total, item) => total + item.quantity, 0);
      
          return {
            basket: {
              ...state.basket,
              items: updatedItems,
              items_count,
              total: roundNumber(total)
            }
          };
        });
      },
      clearBasket: () => {
        set({ basket: { items: [], items_count: 0, total: 0 } });
      }
    }),
    {
      name: "basket-storage",
      storage: createJSONStorage(() => encryptedStorage)
    }
  )
);

export default useBasketStore;