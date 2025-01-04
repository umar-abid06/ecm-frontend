import React from "react";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/order-success.json";

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  return (
    <div>
      {/* <Lottie options={defaultOptions} width={300} height={300} /> */}
      <div className=" flex justify-center items-center">
        <Lottie
          animationData={animationData} // Load the Lottie animation JSON file
          className="w-80 h-80 sm:w-80 sm:h-80 " // Use Tailwind for responsive sizes
          loop={true} // Loop the animation
          autoplay={true} // Autoplay the animation
        />
      </div>
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
