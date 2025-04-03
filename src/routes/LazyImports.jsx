// src/routes/LazyImports.js
import { lazy } from "react";
import Loadable from "./Loadable.jsx";

export const Home = Loadable(lazy(() => import("../pages/Home")));
export const BestSelling = Loadable(lazy(() => import("../pages/BestSelling")));
export const Login = Loadable(lazy(() => import("../pages/Login")));
export const Register = Loadable(lazy(() => import("../pages/Register")));
export const Activation = Loadable(lazy(() => import("../pages/Activation")));
export const FAQ = Loadable(lazy(() => import("../pages/FAQ")));
export const Products = Loadable(lazy(() => import("../pages/Products")));
export const ProductDetails = Loadable(
  lazy(() => import("../pages/ProductDetails"))
);
export const Events = Loadable(lazy(() => import("../pages/Events")));
export const Profile = Loadable(lazy(() => import("../pages/Profile")));

export const Checkout = Loadable(lazy(() => import("../pages/Checkout")));
export const Payment = Loadable(lazy(() => import("../pages/Payment")));
export const OrderSuccess = Loadable(
  lazy(() => import("../pages/OrderSuccess"))
);

// Shop Routes
export const ShopCreate = Loadable(lazy(() => import("../pages/ShopCreate")));
export const ShopPreview = Loadable(
  lazy(() => import("../pages/shop/ShopPreview"))
);
export const ShopLogin = Loadable(lazy(() => import("../pages/ShopLogin")));
export const ShopHome = Loadable(lazy(() => import("../pages/shop/ShopHome")));
export const ShopSettings = Loadable(
  lazy(() => import("../pages/shop/ShopSettings"))
);
export const ShopDashboard = Loadable(
  lazy(() => import("../pages/shop/ShopDashboard"))
);
export const ShopCreateProduct = Loadable(
  lazy(() => import("../pages/shop/ShopCreateProduct"))
);

export const ShopAllOrders = Loadable(
  lazy(() => import("../pages/shop/ShopAllOrders"))
);
export const ShopAllRefunds = Loadable(
  lazy(() => import("../pages/shop/ShopAllRefunds"))
);
export const ShopAllProducts = Loadable(
  lazy(() => import("../pages/shop/ShopAllProducts"))
);
export const ShopCreateEvents = Loadable(
  lazy(() => import("../pages/shop/ShopCreateEvents"))
);
export const ShopAllEvents = Loadable(
  lazy(() => import("../pages/shop/ShopAllEvents"))
);
export const ShopAllCoupouns = Loadable(
  lazy(() => import("../pages/shop/ShopAllCoupouns"))
);
export const ShopWithDrawMoney = Loadable(
  lazy(() => import("../pages/shop/ShopWithDrawMoney"))
);
export const ShopInbox = Loadable(
  lazy(() => import("../pages/shop/ShopInbox"))
);
export const ShopOrderDetails = Loadable(
  lazy(() => import("../pages/shop/ShopOrderDetails"))
);
