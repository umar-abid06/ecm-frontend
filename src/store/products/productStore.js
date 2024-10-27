import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  addProducts: (newProducts) =>
    set((state) => ({ products: [...state.products, ...newProducts] })),
  clearProducts: () => set({ products: [] }),
}));
