import { create } from "zustand";
import { requestApi } from "../../api/requestApi";
import { ENDPOINTS } from "../../api/endpoints";

export const useUserStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  loading: false,
  addressLoading: false,
  usersLoading: false,
  error: null,
  successMessage: null,
  users: null,

  // Load user
  loadUser: async () => {
    set({ loading: true });
    try {
      const data = await requestApi(ENDPOINTS.USER_PROFILE, "get"); // Using dynamic endpoint
      set({
        loading: false,
        isAuthenticated: true,
        user: data.user,
        error: null,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Error loading user",
        isAuthenticated: false,
      });
    }
  },

  // Load seller
  loadSeller: async () => {
    set({ loading: true });
    try {
      const data = await requestApi(ENDPOINTS.GET_SELLER, "get"); // Using dynamic endpoint
      set({ loading: false, user: data.seller, error: null });
    } catch (error) {
      set({ loading: false, error: error.message || "Error loading seller" });
    }
  },

  // Update user information
  updateUserInformation: async (name, email, phoneNumber, password) => {
    set({ loading: true });
    try {
      const data = await requestApi(ENDPOINTS.UPDATE_USER_INFO, "put", {
        email,
        password,
        phoneNumber,
        name,
      });
      set({ loading: false, user: data.user, error: null });
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Error updating user information",
      });
    }
  },

  // Update user address
  updateUserAddress: async (
    country,
    city,
    address1,
    address2,
    zipCode,
    addressType
  ) => {
    set({ addressLoading: true });
    try {
      const data = await requestApi(ENDPOINTS.UPDATE_USER_ADDRESS, "put", {
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType,
      });
      set({
        addressLoading: false,
        successMessage: "User address updated successfully!",
        user: data.user,
        error: null,
      });
    } catch (error) {
      set({
        addressLoading: false,
        error: error.message || "Error updating address",
      });
    }
  },

  // Delete user address
  deleteUserAddress: async (id) => {
    set({ addressLoading: true });
    try {
      const data = await requestApi(
        ENDPOINTS.DELETE_USER_ADDRESS(id),
        "delete"
      ); // Dynamic endpoint
      set({
        addressLoading: false,
        successMessage: "User address deleted successfully!",
        user: data.user,
        error: null,
      });
    } catch (error) {
      set({
        addressLoading: false,
        error: error.message || "Error deleting address",
      });
    }
  },

  // Get all users (admin)
  getAllUsers: async () => {
    set({ usersLoading: true });
    try {
      const data = await requestApi(ENDPOINTS.ADMIN_ALL_USERS, "get"); // Using dynamic endpoint
      set({ usersLoading: false, users: data.users, error: null });
    } catch (error) {
      set({
        usersLoading: false,
        error: error.message || "Error fetching users",
      });
    }
  },

  // Clear error
  clearErrors: () => set({ error: null }),

  // Clear success messages
  clearMessages: () => set({ successMessage: null }),
}));
