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
  },
  APP: {
    HOME: path(ROOTS_APP, ""),
    BESTSELLING: path(ROOTS_APP, "best-selling"),
    PRODUCTS: path(ROOTS_APP, "products"),
    EVENTS: path(ROOTS_APP, "events"),
    FAQ: path(ROOTS_APP, "faq"),
    PROFILE: path(ROOTS_APP, "profile"),
  },
};
