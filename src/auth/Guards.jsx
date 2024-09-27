// src/auth/Guards.js
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const AuthGuard = ({ children }) => {
  const { isAuth } = useAuth(); // Access authentication state using the custom hook

  return isAuth ? children : <Navigate to="/auth/login" />; // Redirect to login if not authenticated
};
export const GuestGuard = ({ children }) => {
  const { isAuth } = useAuth(); // Access authentication state using the custom hook

  return !isAuth ? children : <Navigate to="/home" />; // Redirect to home if already authenticated
};
