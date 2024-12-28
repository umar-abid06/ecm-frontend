import { create } from "zustand";
import { requestApi } from "../../api/requestApi";
import { ENDPOINTS } from "../../api/endpoints";

export const useSellerStore = create((set) => ({
  isShopLoading: true,
  isSeller: false,
  seller: null,
  sellers: null,
  error: null,

  // Actions
  loadSeller: async () => {
    //To be changed when APIS are formed
    // set({ isLoading: true });
    set({ isLoading: false });
    try {
      const data = await requestApi(ENDPOINTS.LOAD_SELLER, "get");
      set({ isLoading: false, isSeller: true, seller: data, error: null });
    } catch (error) {
      set({
        isLoading: false,
        isSeller: false,
        error: error.message || "Error loading seller",
      });
    }
  },

  getAllSellers: async () => {
    //To be changed when APIS are formed
    // set({ isLoading: true });
    set({ isLoading: false });
    try {
      const data = await requestApi(ENDPOINTS.ADMIN_ALL_SELLERS, "get");
      set({ isLoading: false, sellers: data.sellers, error: null });
    } catch (error) {
      set({
        isLoading: false,
        error: error.message || "Error fetching all sellers",
      });
    }
  },

  clearErrors: () => set({ error: null }),
}));
