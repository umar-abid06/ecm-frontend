import React from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useAuthStore from "../store/auth/authStore";

const Home = () => {
  const { isAuth, userData } = useAuthStore();
  const { logout } = useAuth();
  console.log("in component", userData);
  toast.success(userData?.message);

  const handleLogout = () => {
    console.log("Trying to logout!");
    logout();
  };
  return (
    <div>
      <h1>You are {isAuth ? "Authenticated" : "Unauthenticated"}</h1>
      <h1>The user name is : {userData?.data?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
