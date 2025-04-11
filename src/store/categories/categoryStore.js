import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
}));
