// src/store/authStore.js
import { create } from "zustand";
import { getItem, setItem, removeItem } from "../../utils/storageService";

const STORAGE_KEYS = {
  AUTH_TOKEN: "authToken",
  LOGIN_DATA: "loginData",
  REFRESH_TOKEN: "refreshToken",
};

const useAuthStore = create((set) => ({
  isAuth: Boolean(getItem(STORAGE_KEYS.AUTH_TOKEN)),

  setUserAuthentication: (isAuth = false, data) => {
    if (data) {
      setItem(STORAGE_KEYS.LOGIN_DATA, data);
      setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
      setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
    } else {
      // Remove tokens when logging out or if no data provided
      removeItem(STORAGE_KEYS.AUTH_TOKEN);
      removeItem(STORAGE_KEYS.LOGIN_DATA);
      removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    }
    set({ isAuth });
  },
}));

export default useAuthStore;