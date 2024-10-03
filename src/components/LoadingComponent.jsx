// src/components/LoadingComponent.jsx
import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottie/loading-animation.json";

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie
        animationData={loadingAnimation} // Load the Lottie animation JSON file
        className="
            w-32 h-32 
            sm:w-40 sm:h-40 
          " // Use Tailwind for responsive sizes
        loop={true} // Loop the animation
        autoplay={true} // Autoplay the animation
      />
      <p className="text-center text-sm sm:text-base md:text-lg">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingComponent;
