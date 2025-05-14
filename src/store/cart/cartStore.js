import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          const isItemExist = state.cart.find((i) => i._id === item._id);

          const updatedCart = isItemExist
            ? state.cart.map((i) => (i._id === isItemExist._id ? item : i))
            : [...state.cart, item];

          return { cart: updatedCart };
        }),

      removeFromCart: (data) =>
        set((state) => {
          return {
            cart: state.cart.filter((i) => i._id !== data._id),
          };
        }),
    }),
    {
      name: "cartItems", // The key to store data in localStorage
    }
  )
);
