// src/store/authStore.js
import { create } from "zustand";
import { getItem, setItem, removeItem } from "../../utils/storageService";
import { persist } from "zustand/middleware";

const STORAGE_KEYS = {
  AUTH_TOKEN: "authToken",
  LOGIN_DATA: "loginData",
  REFRESH_TOKEN: "refreshToken",
  MESSAGE: "message",
};

const useAuthStore = create(
  persist(
    (set) => ({
      // isAuth: Boolean(getItem(STORAGE_KEYS.AUTH_TOKEN)),
      isAuth: false,
      userData: null,

      setUserAuthentication: (isAuth = false, data) => {
        if (data) {
          setItem(STORAGE_KEYS.LOGIN_DATA, data);
          setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
          setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
          setItem(STORAGE_KEYS.MESSAGE, data.message);
        } else {
          // Remove tokens when logging out or if no data provided
          removeItem(STORAGE_KEYS.AUTH_TOKEN);
          removeItem(STORAGE_KEYS.LOGIN_DATA);
          removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        }
        set({ isAuth, userData: data });
      },
    }),
    {
      name: "auth-storage", // Persisted storage key
      getStorage: () => localStorage, // Use localStorage for persistence
    }
  )
);

export default useAuthStore;
