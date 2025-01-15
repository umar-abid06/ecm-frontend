import { create } from "zustand";
import { productData } from "../../static/data";

export const useProductStore = create((set) => ({
  products: productData,
  addProducts: (newProducts) => {
    // Ensure newProducts is an array
    const productsToAdd = Array.isArray(newProducts)
      ? newProducts
      : [newProducts];
    set((state) => ({ products: [...state.products, ...productsToAdd] }));
  },
  clearProducts: () => set({ products: [] }),
}));
