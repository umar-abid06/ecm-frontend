import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
const fetchProductById = async (id) => {
  try {
    const response = await requestApi(`${ENDPOINTS.PRODUCTS}/${id}`, "get");

    return response.data; // Assuming 'data' holds the product details
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
// Create product
const createProduct = async (data) => {
  try {
    const response = await requestApi(ENDPOINTS.PRODUCTS, "post", data);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Update product by ID
const updateProduct = async ({ id, updatedData }) => {
  try {
    const response = await requestApi(
      `${ENDPOINTS.PRODUCTS}/${id}`,
      "put",
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating product ${id}:`, error);
    throw error;
  }
};

// Delete product by ID
const deleteProduct = async (id) => {
  try {
    const response = await requestApi(`${ENDPOINTS.PRODUCTS}/${id}`, "delete");
    return response.data;
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    throw error;
  }
};
// export const useProducts = () => {
//   const {
//     data: products,
//     error,
//     isLoading,
//   } = useQuery({
//     queryKey: ["products"],
//     queryFn: fetchProducts,
//   });
//   return { products, error, isLoading };
// };

// export const useProductById = (id) => {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ["products", id],
//     queryFn: () => fetchProductsById(id),
//   });
//   return { data, error, isLoading };
// };
// export const useProducts = () => {
//   const queryClient = useQueryClient();

//   const useAllProducts = () =>
//     useQuery({
//       queryKey: ["products"],
//       queryFn: fetchProducts,
//     });

//   const useProductById = (id) =>
//     useQuery({
//       queryKey: ["product", id],
//       queryFn: () => fetchProductsById(id),
//       enabled: !!id,
//     });

//   const createProductMutation = useMutation({
//     mutationFn: createProduct,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["products"]);
//     },
//   });

//   const updateProductMutation = useMutation({
//     mutationFn: updateProduct,
//     onSuccess: (_, { id }) => {
//       queryClient.invalidateQueries(["products"]);
//       queryClient.invalidateQueries(["product", id]);
//     },
//   });

//   const deleteProductMutation = useMutation({
//     mutationFn: deleteProduct,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["products"]);
//     },
//   });

//   return {
//     useAllProducts,
//     useProductById,
//     createProductMutation,
//     updateProductMutation,
//     deleteProductMutation,
//   };
// };

export const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
};
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(["products"]);
      queryClient.invalidateQueries(["product", id]);
    },
  });
};
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
};
