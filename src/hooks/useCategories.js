import { useQuery } from "react-query";
import useCategoryStore from ".../store/categories/categoryStore";
import { requestApi } from "../api/requestApi";
import { ENDPOINTS } from "../api/endpoints";

// Fetch categories from the API using requestApi
const fetchCategories = async () => {
  try {
    const response = await requestApi(ENDPOINTS.PRODUCT_CATEGORIES, "get");
    return response.data; // Assuming 'data' holds the categories list
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const useCategories = () => {
  const setCategories = useCategoryStore((state) => state.setCategories);

  const { data, error, isLoading } = useQuery("categories", fetchCategories, {
    onSuccess: (data) => {
      // Store the fetched categories data in Zustand store
      setCategories(data);
    },
    onError: (error) => {
      console.error("Fetching Error", error);
    },
  });

  return { categories: data, error, isLoading };
};

export default useCategories;
