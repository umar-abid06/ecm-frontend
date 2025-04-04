// src/hooks/useAuth.js
import useAuthStore from "../store/auth/authStore";
import { requestApi } from "../api/requestApi";
import { ENDPOINTS } from "../api/endpoints";

const useAuth = () => {
  const { setUserAuthentication, setEmailCheckMsg } = useAuthStore();

  const login = async (credentials) => {
    try {
      const response = await requestApi(ENDPOINTS.LOGIN, "post", credentials);
      // console.log("Response in useAuth", response);
      setUserAuthentication(true, response); // Save token in Zustand and local storage
      return response;
    } catch (error) {
      // console.log("Login failed:", error.data);
      return error.data;
    }
  };

  const logout = () => {
    setUserAuthentication(false);
    setEmailCheckMsg(null); // Clear email check message
  };

  // Register function (newly added)
  const register = async (credentials) => {
    try {
      // Make the API request to register the user
      const response = await requestApi(
        ENDPOINTS.REGISTER,
        "post",
        credentials
      );
      // console.log("Regis Authform", response);

      return response;
    } catch (error) {
      // console.error("Registration error:", error);
      return error;
    }
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

  return { login, logout, register };
};

export default useAuth;
