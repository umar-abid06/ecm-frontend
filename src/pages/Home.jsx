import React from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useAuthStore from "../store/auth/authStore";
import Header from "../components/layout/header";
import Hero from "../components/layout/hero";

const Home = () => {
  const { isAuth, userData } = useAuthStore();
  const { logout } = useAuth();

  const handleLogout = () => {
    // console.log("Trying to logout!");
    logout();
  };
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      {/* <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer /> */}
      <h1>You are {isAuth ? "Authenticated" : "Unauthenticated"}</h1>
      <h1>The user name is : {userData?.data?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
