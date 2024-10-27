import { create } from "zustand";

export const useSellerStore = create((set) => ({
  isSeller: false, // Initial state

  // Action to toggle the seller status
  toggleSeller: () => set((state) => ({ isSeller: !state.isSeller })),

  // Action to set seller status explicitly
  setIsSeller: (status) => set({ isSeller: status }),
}));
