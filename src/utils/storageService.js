// src/utils/storageService.js

export const getItem = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error(`Error getting item from storage: ${e}`);
    return null;
  }
};

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error setting item in storage: ${e}`);
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(`Error removing item from storage: ${e}`);
  }
};

// Clears all authentication-related data from local storage and resets the application state
export const clearAllData = () => {
  try {
    // Remove authentication tokens and user data from local storage
    localStorage.removeItem("authToken"); // Remove the auth token
    localStorage.removeItem("refreshToken"); // Remove the refresh token
    localStorage.removeItem("loginData"); // Remove login data if any

    // If you are using Zustand, you can reset the authentication state here
    // Example: resetting Zustand auth store (optional, depending on your state management)
    // useAuthStore.getState().setUserAuthentication(false);

    // Any additional cleanup logic can be added here
    console.log("All authentication data cleared successfully.");
  } catch (error) {
    console.error("Error clearing authentication data:", error);
  }
};
