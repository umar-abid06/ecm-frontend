import { create } from "zustand";

export const useWishlistStore = create((set) => ({
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => ({ wishlist: [...state.wishlist, product] })),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId),
    })),
  clearWishlist: () => set({ wishlist: [] }),
}));
