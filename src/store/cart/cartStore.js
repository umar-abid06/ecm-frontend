import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          const isItemExist = state.cart.find((i) => i.id === item.id);

          const updatedCart = isItemExist
            ? state.cart.map((i) => (i.id === isItemExist.id ? item : i))
            : [...state.cart, item];

          return { cart: updatedCart };
        }),

      removeFromCart: (data) =>
        set((state) => {
          return {
            cart: state.cart.filter((i) => i.id !== data.id),
          };
        }),
    }),
    {
      name: "cartItems", // The key to store data in localStorage
    }
  )
);
