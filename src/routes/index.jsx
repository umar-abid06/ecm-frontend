// src/routes/AppRouter.js
import { useRoutes, Navigate } from "react-router-dom";
import { PATHS } from "../utils/paths";
import {
  Home,
  Login,
  Register,
  BestSelling,
  Products,
  Events,
  FAQ,
  Profile,
} from "./LazyImports";
import { AuthGuard, GuestGuard } from "../auth/Guards";
import ErrorBoundary from "../components/ErrorBoundary.jsx"; // Import the ErrorBoundary
import NotFoundComponent from "../components/NotFoundComponent.jsx"; // Import the 404 component

const AppRoutes = () =>
  useRoutes([
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
    // Catch-All Route: Displays 404 for undefined paths
    {
      path: "*",
      element: <NotFoundComponent />, // Show the 404 component instead of redirecting
    },
  ]);

export default function Router() {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}
