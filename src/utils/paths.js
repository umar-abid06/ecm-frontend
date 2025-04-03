// src/utils/paths.js
function path(root, sublink) {
  return `${root}${sublink}`;
}

export const ROOTS_AUTH = "/auth";
export const ROOTS_APP = "/";

export const PATHS = {
  AUTH: {
    LOGIN: path(ROOTS_AUTH, "/login"),
    REGISTER: path(ROOTS_AUTH, "/register"),
    ACTIVATION: path(ROOTS_AUTH, "/activation"),
  },
  APP: {
    HOME: path(ROOTS_APP, ""),
    BESTSELLING: path(ROOTS_APP, "best-selling"),
    PRODUCTS: path(ROOTS_APP, "products"),
    PRODUCT_DETAILS: path(ROOTS_APP, "product/:id"),
    EVENTS: path(ROOTS_APP, "events"),
    FAQ: path(ROOTS_APP, "faq"),
    PROFILE: path(ROOTS_APP, "profile"),

    CHECKOUT: path(ROOTS_APP, "checkout"),
    PAYMENT: path(ROOTS_APP, "payment"),
    ORDER_SUCCESS: path(ROOTS_APP, "order/success"),

    // Shop Routes
    SHOP_CREATE: path(ROOTS_APP, "shop-create"),
    SHOP_PREVIEW: path(ROOTS_APP, "shop/preview/:id"),
    SHOP_LOGIN: path(ROOTS_APP, "shop-login"),
    SHOP_HOME: path(ROOTS_APP, "shop/:id"),
    SHOP_SETTINGS: path(ROOTS_APP, "shop-settings"),
    SHOP_ORDER: path(ROOTS_APP, "shop-order/:id"),
    SHOP_DASHBOARD: path(ROOTS_APP, "shop-dashboard"),
    SHOP_DASHBOARD_CREATE_PRODUCT: path(
      ROOTS_APP,
      "shop-dashboard-create-product"
    ),
    SHOP_DASHBOARD_PRODUCTS: path(ROOTS_APP, "shop-dashboard-products"),
    SHOP_DASHBOARD_ORDERS: path(ROOTS_APP, "shop-dashboard-orders"),
    SHOP_DASHBOARD_REFUNDS: path(ROOTS_APP, "shop-dashboard-refunds"),
    SHOP_DASHBOARD_CREATE_EVENT: path(ROOTS_APP, "shop-dashboard-create-event"),
    SHOP_DASHBOARD_EVENTS: path(ROOTS_APP, "shop-dashboard-events"),
    SHOP_DASHBOARD_COUPOUNS: path(ROOTS_APP, "shop-dashboard-coupouns"),
    SHOP_DASHBOARD_WITHDRAW_MONEY: path(
      ROOTS_APP,
      "shop-dashboard-withdraw-money"
    ),
    SHOP_DASHBOARD_MESSAGES: path(ROOTS_APP, "shop-dashboard-messages"),
  },
};
