// src/routes/AppRouter.js
import { useRoutes, Navigate } from "react-router-dom";
import { PATHS } from "../utils/paths";
import { Home, Login, Register } from "./LazyImports";
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
