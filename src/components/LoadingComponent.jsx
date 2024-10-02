// src/components/LoadingComponent.jsx
import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottie/loading-animation.json";

const LoadingComponent = ({ height = 150, width = 150 }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie
        animationData={loadingAnimation} // Load the Lottie animation JSON file
        style={{ height, width }} // You can pass dynamic height and width props
        loop={true} // Loop the animation
        autoplay={true} // Autoplay the animation
      />
      <p>Loading, please wait...</p>
    </div>
  );
};

export default LoadingComponent;
