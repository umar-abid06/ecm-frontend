import { create } from "zustand";
import { productData } from "../../static/data";

export const useProductStore = create((set) => ({
  //   products: [],
  products: productData,
  addProducts: (newProducts) =>
    set((state) => ({ products: [...state.products, ...newProducts] })),
  clearProducts: () => set({ products: [] }),
}));
