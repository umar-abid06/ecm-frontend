import { create } from "zustand";
import { requestApi } from "../../api/requestApi";
import { ENDPOINTS } from "../../api/endpoints";

// Zustand store for managing orders
export const useOrderStore = create((set) => ({
  isLoading: false,
  adminOrderLoading: false,
  orders: null,
  adminOrders: null,
  error: null,

  // Actions
  getAllOrdersOfUser: async (userId) => {
    //To be changed when APIS are formed
    // set({ isLoading: true });
    set({ isLoading: false });
    try {
      const data = await requestApi(
        `${ENDPOINTS.GET_ALL_ORDERS}/${userId}`,
        "get"
      );
      set({ isLoading: false, orders: data.orders, error: null });
    } catch (error) {
      set({
        isLoading: false,
        error: error.message || "Error fetching user orders",
      });
    }
  },

  getAllOrdersOfShop: async (shopId) => {
    //To be changed when APIS are formed
    // set({ isLoading: true });
    set({ isLoading: false });
    try {
      const data = await requestApi(
        `${ENDPOINTS.GET_SELLER_ALL_ORDERS}/${shopId}`,
        "get"
      );
      set({ isLoading: false, orders: data.orders, error: null });
    } catch (error) {
      set({
        isLoading: false,
        error: error.message || "Error fetching shop orders",
      });
    }
  },

  getAllOrdersOfAdmin: async () => {
    set({ adminOrderLoading: true });
    try {
      const data = await requestApi(ENDPOINTS.ADMIN_ALL_ORDERS, "get");
      set({ adminOrderLoading: false, adminOrders: data.orders, error: null });
    } catch (error) {
      set({
        adminOrderLoading: false,
        error: error.message || "Error fetching admin orders",
      });
    }
  },

  clearErrors: () => set({ error: null }),
}));
