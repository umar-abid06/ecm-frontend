import useAuth from "../hooks/useAuth";
import useAuthStore from "../store/auth/authStore";
import Header from "../components/layout/header";
import Hero from "../components/layout/hero";
import Footer from "../components/layout/footer";
import {
  Categories,
  BestDeals,
  Sponsored,
  FeaturedProduct,
} from "../components/home";
import { Events } from "../components/events";

const Home = () => {
  const { isAuth, userData } = useAuthStore();
  const { logout } = useAuth();

  const handleLogout = () => {
    // console.log("Trying to logout!");
    logout();
  };
  return (
    <div className="bg-[#f6f6f5]">
      <Header activeHeading={1} />
      <Hero />
      <Categories />

      <BestDeals />

      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
      {/* 
      <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Home;
