// src/hooks/useAuth.js
import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS } from "../api/endpoints";
import { requestApi } from "../api/requestApi";
import useAuthStore from "../store/auth/authStore";

const useAuth = () => {
  const { setUserAuthentication, setEmailCheckMsg } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: (credentials) =>
      requestApi(ENDPOINTS.LOGIN, "post", credentials),
    onSuccess: (response) => {
      setUserAuthentication(true, response);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  // Register Mutation
  const registerMutation = useMutation({
    mutationFn: (credentials) =>
      requestApi(ENDPOINTS.REGISTER, "post", credentials),
    onSuccess: (response) => {
      setEmailCheckMsg(response?.data?.message);
    },
    onError: (error) => {
      // toast.error(`${error?.message}`);
      console.error("Registration error:", error);
    },
  });

  // Logout Function
  const logout = () => {
    setUserAuthentication(false);
    setEmailCheckMsg(null); // Clear email check message
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

  return {
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    register: registerMutation.mutateAsync,
    isRegistering: registerMutation.isPending,
    logout,
  };
};

export default useAuth;
