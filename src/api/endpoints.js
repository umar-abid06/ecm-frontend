export const ENDPOINTS = {
  //auth
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  REFRESH_TOKEN: "/auth/refresh-token",
  USER_PROFILE: "/user/profile",

  //orders
  GET_ALL_ORDERS: "",
  GET_SELLER_ALL_ORDERS: "",
  ADMIN_ALL_ORDERS: "",

  //seller
  LOAD_SELLER: "",
  ADMIN_ALL_SELLERS: "",

  // USER_PROFILE: "/user/getuser",
  UPDATE_USER_INFO: "/user/update-user-info",
  UPDATE_USER_ADDRESS: "/user/update-user-addresses",
  DELETE_USER_ADDRESS: (id) => `/user/delete-user-address/${id}`, // Dynamic endpoint

  // Seller-related endpoint
  GET_SELLER: "/shop/getSeller",

  // Admin-related endpoints
  ADMIN_ALL_USERS: "/user/admin-all-users",
};
