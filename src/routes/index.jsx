// src/routes/AppRouter.js
import { useRoutes, Navigate } from "react-router-dom";
import { PATHS } from "../utils/paths";
import {
  Home,
  Login,
  Register,
  Activation,
  BestSelling,
  Products,
  Events,
  FAQ,
  Profile,
  ShopCreate,
  ShopPreview,
  ShopLogin,
  ShopHome,
  ShopSettings,
  ShopDashboard,
  ShopCreateProduct,
  ShopAllProducts,
  ShopAllRefunds,
  ShopAllOrders,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopCreateEvents,
  ShopInbox,
  ShopWithDrawMoney,
  ShopOrderDetails,
  Checkout,
  Payment,
  OrderSuccess,
  ProductDetails,
} from "./LazyImports";
import { AuthGuard, GuestGuard, SellerGuard } from "../auth/Guards";
import ErrorBoundary from "../components/ErrorBoundary.jsx"; // Import the ErrorBoundary
import NotFoundComponent from "../components/NotFoundComponent.jsx"; // Import the 404 component
import { Elements } from "@stripe/react-stripe-js";
import { getStripePromise } from "../utils/stripe.js";
import useStripeApiKey from "../hooks/useStripe.js";

const AppRoutes = () => {
  const stripeApiKey = useStripeApiKey();

  const stripePromise = getStripePromise(stripeApiKey);
  const routes = useRoutes([
    // Authentication Routes
    {
      path: PATHS.AUTH.LOGIN,
      element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      ),
    },
    {
      path: PATHS.AUTH.REGISTER,
      element: (
        <GuestGuard>
          <Register />
        </GuestGuard>
      ),
    },
    {
      path: PATHS.AUTH.ACTIVATION,
      element: (
        <GuestGuard>
          <Activation />
        </GuestGuard>
      ),
    },
    // Main Application Routes
    {
      path: PATHS.APP.HOME,
      element: (
        <AuthGuard>
          <Home />
        </AuthGuard>
      ),
    },
    {
      path: PATHS.APP.BESTSELLING,
      element: (
        <AuthGuard>
          <BestSelling />
        </AuthGuard>
      ),
    },
    {
      path: PATHS.APP.PRODUCTS,
      element: (
        <AuthGuard>
          <Products />
        </AuthGuard>
      ),
    },
    {
      path: PATHS.APP.PRODUCT_DETAILS,
      element: (
        // <AuthGuard>
        <ProductDetails />
        // </AuthGuard>
      ),
    },
    {
      path: PATHS.APP.EVENTS,
      element: (
        <AuthGuard>
          <Events />
        </AuthGuard>
      ),
    },
    {
      path: PATHS.APP.FAQ,
      element: (
        <AuthGuard>
          <FAQ />
        </AuthGuard>
      ),
    },
    {
      path: PATHS.APP.PROFILE,
      element: (
        <AuthGuard>
          <Profile />
        </AuthGuard>
      ),
    },
    {
      path: PATHS.APP.CHECKOUT,
      element: (
        // <AuthGuard>
        <Checkout />
        // </AuthGuard>
      ),
    },
    // Payment Route
    stripePromise && {
      path: PATHS.APP.PAYMENT,
      element: (
        <Elements stripe={stripePromise}>
          {/* <ProtectedRoute> */}
          <Payment />
          {/* </ProtectedRoute> */}
        </Elements>
      ),
    },
    {
      path: PATHS.APP.ORDER_SUCCESS,
      element: (
        // <AuthGuard>
        <OrderSuccess />
        // </AuthGuard>
      ),
    },
    //Shop Routes
    {
      path: PATHS.APP.SHOP_CREATE,
      element: (
        // <GuestGuard>
        <ShopCreate />
        // </GuestGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_PREVIEW,
      element: (
        <GuestGuard>
          <ShopPreview />
        </GuestGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_LOGIN,
      element: (
        <GuestGuard>
          <ShopLogin />
        </GuestGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_HOME,
      element: (
        <SellerGuard>
          <ShopHome />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_SETTINGS,
      element: (
        <SellerGuard>
          <ShopSettings />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_ORDER,
      element: (
        <SellerGuard>
          <ShopOrderDetails />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD,
      element: (
        <SellerGuard>
          <ShopDashboard />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_CREATE_PRODUCT,
      element: (
        <SellerGuard>
          <ShopCreateProduct />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_PRODUCTS,
      element: (
        <SellerGuard>
          <ShopAllProducts />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_ORDERS,
      element: (
        <SellerGuard>
          <ShopAllOrders />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_REFUNDS,
      element: (
        <SellerGuard>
          <ShopAllRefunds />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_EVENTS,
      element: (
        <SellerGuard>
          <ShopAllEvents />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_CREATE_EVENT,
      element: (
        <SellerGuard>
          <ShopCreateEvents />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_COUPOUNS,
      element: (
        <SellerGuard>
          <ShopAllCoupouns />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_MESSAGES,
      element: (
        <SellerGuard>
          <ShopInbox />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_MESSAGES,
      element: (
        <SellerGuard>
          <ShopInbox />
        </SellerGuard>
      ),
    },
    {
      path: PATHS.APP.SHOP_DASHBOARD_WITHDRAW_MONEY,
      element: (
        <SellerGuard>
          <ShopWithDrawMoney />
        </SellerGuard>
      ),
    },

    // Catch-All Route: Displays 404 for undefined paths
    {
      path: "*",
      element: <NotFoundComponent />, // Show the 404 component instead of redirecting
    },
  ]);
  return routes;
};

export default function Router() {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}
