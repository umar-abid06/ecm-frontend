import React from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useAuthStore from "../store/auth/authStore";

const Home = () => {
  const { isAuth, userData } = useAuthStore();
  console.log("in component", userData);
  toast.success(userData?.message);
  return (
    <div>
      <h1>You are {isAuth ? "Authenticated" : "Unauthenticated"}</h1>
      <h1>The user name is : {userData?.data?.name}</h1>
    </div>
  );
};

export default Home;
