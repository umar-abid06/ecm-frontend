// src/api/apiClient.js
import { create } from "apisauce";
import axios from "axios";
import { getItem, setItem, clearAllData } from "../utils/storageService";
import { ENDPOINTS } from "./endpoints";
import { queryClient } from "../context/ApiClientProvider"; // Importing React Query client for state management

const BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your actual base URL or environment variable

// Create an ApiSauce client instance
const apiClient = create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000, // Set timeout for requests
});

// Add an Authorization header to all requests except unauthorized URLs
apiClient.addAsyncRequestTransform(async (request) => {
  const token = getItem("authToken");
  const unauthorizedUrls = [ENDPOINTS.LOGIN, ENDPOINTS.REFRESH_TOKEN]; // Define unauthorized URLs
  if (!unauthorizedUrls.includes(request.url) && token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
});

// Function to handle token refresh on unauthorized requests
async function handleTokenRefresh(response) {
  if (
    response.status === 401 &&
    !response.config.url.includes(ENDPOINTS.REFRESH_TOKEN)
  ) {
    const refreshToken = getItem("refreshToken");
    if (refreshToken) {
      const refreshResponse = await apiClient.post(ENDPOINTS.REFRESH_TOKEN, {
        refreshToken,
      });
      if (refreshResponse.ok) {
        setItem("authToken", refreshResponse.data.token);
        setItem("refreshToken", refreshResponse.data.refreshToken);
        queryClient.invalidateQueries(); // Invalidate queries after token refresh
        return;
      }
      clearAllData(); // Clear local storage and reset state if refresh fails
    }
  }
}

// Add response transformation to handle token refresh
apiClient.addResponseTransform(handleTokenRefresh);

export default apiClient;
