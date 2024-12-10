// src/routes/LazyImports.js
import { lazy } from "react";
import Loadable from "./Loadable.jsx";

export const Home = Loadable(lazy(() => import("../pages/Home")));
export const BestSelling = Loadable(lazy(() => import("../pages/BestSelling")));
export const Login = Loadable(lazy(() => import("../pages/Login")));
export const FAQ = Loadable(lazy(() => import("../pages/FAQ")));
export const Register = Loadable(lazy(() => import("../pages/Register")));
export const Products = Loadable(lazy(() => import("../pages/Products")));
export const Events = Loadable(lazy(() => import("../pages/Events")));
export const Profile = Loadable(lazy(() => import("../pages/Profile")));
