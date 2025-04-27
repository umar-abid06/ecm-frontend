import { useQuery } from "@tanstack/react-query";
import { requestApi } from "../api/requestApi";
import { ENDPOINTS } from "../api/endpoints";

// Fetch products from the API using requestApi
const fetchProducts = async () => {
  try {
    const response = await requestApi(ENDPOINTS.PRODUCTS, "get");
    return response.data; // Assuming 'data' holds the products list
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const useProducts = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  return { products, error, isLoading };
};

const fetchProductsById = async (id) => {
  try {
    const response = await requestApi(`${ENDPOINTS.PRODUCTS}/${id}`, "get");

    return response.data; // Assuming 'data' holds the product details
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
export const useProductById = (id) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProductsById(id),
  });
  return { data, error, isLoading };
};
