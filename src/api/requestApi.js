// src/api/requestApi.js
import useLoadingStore from "../store/loadingStore";
import apiClient from "./apiClient";

// Function to handle all API requests with a unified response format
export async function requestApi(url, method, data = {}, config = {}) {
  const { setLoading } = useLoadingStore.getState();
  setLoading(true);
  const response = await apiClient[method](url, data, config);
  setLoading(false);
  // console.log("res--> ", response);
  if (!response.ok) {
    // Throw the entire response data object or response object
    const errorData = {
      message: response.data?.message || "An error occurred", // Extract message if available
      data: response.data, // Include the entire response data
      status: response.status, // Include status code
      problem: response.problem, // Include problem from apisauce if any
    };

    throw errorData; // Throw the entire errorData object
  }

  return response.data; // Return only the response data
}
