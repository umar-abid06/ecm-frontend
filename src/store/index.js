// src/store/index.js
import { useProductStore } from "./products/productStore";
import { useCartStore } from "./cart/cartStore";
import { useWishlistStore } from "./wishlist/wishlistStore";
import useAuthStore from "./auth/authStore";
import useLoadingStore from "./loadingStore";
import { useSellerStore } from "./seller/sellerStore";
import { useEventStore } from "./events/eventStore";

export const useStore = () => ({
  ...useProductStore(),
  ...useCartStore(),
  ...useWishlistStore(),
  ...useAuthStore(),
  ...useLoadingStore(),
  ...useSellerStore(),
  ...useEventStore(),
});
