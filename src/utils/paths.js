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
    HOME: path(ROOTS_APP, "/"),
  },
};
