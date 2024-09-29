// src/hooks/useAuth.js
import { useEffect } from "react";
import useAuthStore from "../store/auth/authStore";
import { requestApi } from "../api/requestApi";
import { ENDPOINTS } from "../api/endpoints";

const useAuth = () => {
  const { setUserAuthentication } = useAuthStore();

  const login = async (credentials) => {
    try {
      const data = await requestApi(ENDPOINTS.LOGIN, "post", credentials);
      setUserAuthentication(true, data); // Save token in Zustand and local storage
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    setUserAuthentication(false);
  };

  // useEffect(() => {
  //   // Validate token on component mount and set auth state accordingly
  //   const validateToken = async () => {
  //     try {
  //       const data = await requestApi(ENDPOINTS.USER_PROFILE, "get");
  //       setUserAuthentication(true, data);
  //     } catch (error) {
  //       logout();
  //     }
  //   };

  //   if (isAuth) validateToken();
  // }, [isAuth]);

  return { login, logout };
};

export default useAuth;
