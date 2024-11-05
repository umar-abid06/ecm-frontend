import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
  persist(
    (set) => ({
      wishlist: [],

      addToWishlist: (item) =>
        set((state) => {
          const isItemExist = state.wishlist.find((i) => i.id === item.id);

          const updatedWishlist = isItemExist
            ? state.wishlist.map((i) => (i.id === isItemExist.id ? item : i))
            : [...state.wishlist, item];

          return { wishlist: updatedWishlist };
        }),

      removeFromWishlist: (data) =>
        set((state) => ({
          wishlist: state.wishlist.filter((i) => i.id !== data.id),
        })),
    }),
    {
      name: "wishlistItems", // Key for localStorage
    }
  )
);
