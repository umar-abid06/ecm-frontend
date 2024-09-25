// src/routes/LazyImports.js
import { lazy } from "react";
import Loadable from "./Loadable.jsx";

export const Home = Loadable(lazy(() => import("../pages/Home")));
export const Login = Loadable(lazy(() => import("../pages/Login")));
export const Register = Loadable(lazy(() => import("../pages/Register")));
