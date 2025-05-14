import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
  persist(
    (set) => ({
      wishlist: [],

      addToWishlist: (item) =>
        set((state) => {
          const isItemExist = state.wishlist.find((i) => i._id === item._id);

          const updatedWishlist = isItemExist
            ? state.wishlist.map((i) => (i._id === isItemExist._id ? item : i))
            : [...state.wishlist, item];

          return { wishlist: updatedWishlist };
        }),

      removeFromWishlist: (data) =>
        set((state) => ({
          wishlist: state.wishlist.filter((i) => i._id !== data._id),
        })),
    }),
    {
      name: "wishlistItems", // Key for localStorage
    }
  )
);
