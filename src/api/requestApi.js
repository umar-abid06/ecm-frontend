// src/api/requestApi.js
import apiClient from "./apiClient";

// Function to handle all API requests with a unified response format
export async function requestApi(url, method, data = {}, config = {}) {
  const response = await apiClient[method](url, data, config);
  // console.log("res--> ", response);
  if (!response.ok) {
    console.error("API Error:", response.problem, response.data);
    throw new Error(response.data?.message || "An error occurred");
  }

  return response.data; // Return only the response data
}
