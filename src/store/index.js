// src/store/index.js
import { useProductStore } from "./products/productStore";
import { useCartStore } from "./cart/cartStore";
import { useWishlistStore } from "./wishlist/wishlistStore";
import { useSellerStore } from "./seller/sellerStore";
import { useEventStore } from "./events/eventStore";
import { useOrderStore } from "./orders/orderStore";
import useAuthStore from "./auth/authStore";
import useLoadingStore from "./loadingStore";
import { useUserStore } from "./user/userStore";
import { useCategoryStore } from "./categories/categoryStore";

export const useStore = () => ({
  ...useProductStore(),
  ...useCartStore(),
  ...useWishlistStore(),
  ...useAuthStore(),
  ...useLoadingStore(),
  ...useSellerStore(),
  ...useEventStore(),
  ...useOrderStore(),
  ...useUserStore(),
  ...useCategoryStore(),
});
