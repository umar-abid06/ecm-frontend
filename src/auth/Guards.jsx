// src/auth/Guards.js
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children }) => {
  const isAuthenticated = false; // Replace with actual authentication logic
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export const GuestGuard = ({ children }) => {
  const isAuthenticated = false; // Replace with actual authentication logic
  return !isAuthenticated ? children : <Navigate to="/home" />;
};
