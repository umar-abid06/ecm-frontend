// src/auth/Guards.js
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/auth/authStore";

export const AuthGuard = ({ children }) => {
  // const { isAuth } = useAuthStore(); // Access authentication state using the custom hook
  const isAuth = true;
  return isAuth ? children : <Navigate to="/auth/login" />; // Redirect to login if not authenticated
};
export const GuestGuard = ({ children }) => {
  const { isAuth } = useAuthStore(); // Access authentication state using the custom hook

  return !isAuth ? children : <Navigate to="/" />; // Redirect to home if already authenticated
};
