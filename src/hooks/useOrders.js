import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { requestApi } from "../api/requestApi";
import { ENDPOINTS } from "../api/endpoints";

// Fetch functions
const fetchUserOrders = async (userId) => {
  try {
    const response = await requestApi(
      `${ENDPOINTS.GET_USER_ORDERS}/${userId}`,
      "get"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
};

const fetchSellerOrders = async (shopId) => {
  try {
    const response = await requestApi(
      `${ENDPOINTS.GET_SELLER_ORDERS}/${shopId}`,
      "get"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching seller orders:", error);
    throw error;
  }
};

const fetchAdminOrders = async () => {
  try {
    const response = await requestApi(ENDPOINTS.GET_ADMIN_ORDERS, "get");
    return response.data;
  } catch (error) {
    console.error("Error fetching admin orders:", error);
    throw error;
  }
};

// Create order
const createOrder = async (orderData) => {
  try {
    const response = await requestApi(
      ENDPOINTS.CREATE_ORDER,
      "post",
      orderData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Update order status
const updateOrderStatus = async ({ orderId, statusData }) => {
  try {
    const response = await requestApi(
      `${ENDPOINTS.UPDATE_ORDER_STATUS}/${orderId}`,
      "put",
      statusData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};

// Request refund
const requestOrderRefund = async ({ orderId, refundData }) => {
  try {
    const response = await requestApi(
      `${ENDPOINTS.REQUEST_REFUND}/${orderId}`,
      "put",
      refundData
    );
    return response.data;
  } catch (error) {
    console.error("Error requesting refund:", error);
    throw error;
  }
};

// Accept refund
const acceptOrderRefund = async ({ orderId, acceptData }) => {
  try {
    const response = await requestApi(
      `${ENDPOINTS.ACCEPT_REFUND}/${orderId}`,
      "put",
      acceptData
    );
    return response.data;
  } catch (error) {
    console.error("Error accepting refund:", error);
    throw error;
  }
};

export const useOrders = () => {
  const queryClient = useQueryClient();

  const useUserOrders = (userId) =>
    useQuery({
      queryKey: ["orders", "user", userId],
      queryFn: () => fetchUserOrders(userId),
      enabled: !!userId,
    });

  const useSellerOrders = (shopId) =>
    useQuery({
      queryKey: ["orders", "seller", shopId],
      queryFn: () => fetchSellerOrders(shopId),
      enabled: !!shopId,
    });

  const useAdminOrders = () =>
    useQuery({
      queryKey: ["orders", "admin"],
      queryFn: fetchAdminOrders,
    });

  const createOrderMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => queryClient.invalidateQueries(["orders"]),
  });

  const updateOrderStatusMutation = useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: () => queryClient.invalidateQueries(["orders"]),
  });

  const requestRefundMutation = useMutation({
    mutationFn: requestOrderRefund,
    onSuccess: () => queryClient.invalidateQueries(["orders"]),
  });

  const acceptRefundMutation = useMutation({
    mutationFn: acceptOrderRefund,
    onSuccess: () => queryClient.invalidateQueries(["orders"]),
  });

  return {
    useUserOrders,
    useSellerOrders,
    useAdminOrders,
    createOrderMutation,
    updateOrderStatusMutation,
    requestRefundMutation,
    acceptRefundMutation,
  };
};
