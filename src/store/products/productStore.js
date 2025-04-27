import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  productsLoading: false,
  setAllProducts: (products) => set({ products }),
  setProductsLoading: (loading) => set({ productsLoading: loading }),
}));
