// src/context/ApiClientProvider.js
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance with default configurations
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry once on failure
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    },
  },
});

export default function ApiClientProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
