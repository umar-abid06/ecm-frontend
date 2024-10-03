// src/store/loadingStore.js
import { create } from "zustand";

const useLoadingStore = create((set) => ({
  loading: false, // Initial loading state

  // Action to show loading
  setLoading: (loading) => set({ loading }),
}));

export default useLoadingStore;
