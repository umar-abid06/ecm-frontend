import { Navigate } from "react-router-dom";
import { useStore } from "../store";
import { PATHS } from "../utils/paths";

export const AuthGuard = ({ children }) => {
  // const { isAuth } = useStore(); // Access authentication state using the custom hook
  const isAuth = true;
  return isAuth ? children : <Navigate to={PATHS.AUTH.LOGIN} />; // Redirect to login if not authenticated
};
export const GuestGuard = ({ children }) => {
  const { isAuth } = useStore(); // Access authentication state using the custom hook

  return !isAuth ? children : <Navigate to={PATHS.APP.HOME} />; // Redirect to home if already authenticated
};
export const SellerGuard = ({ children }) => {
  const { isSeller } = useStore(); // Access authentication state using the custom hook

  return !isSeller ? children : <Navigate to={PATHS.APP.SHOP_LOGIN} />; // Redirect to home if already authenticated
};
