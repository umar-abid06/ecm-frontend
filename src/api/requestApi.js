// src/api/requestApi.js
import apiClient from "./apiClient";
import axios from "axios";

export async function requestApi(url, method, data = {}, config = {}) {
  const response = await apiClient[method](url, data, config);
  const responseData = {
    status: response.status,
    message: response.data?.message || "Operation successful",
    data: response.data?.data || response.data,
  };

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
}
