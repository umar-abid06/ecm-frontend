// src/components/LoadingComponent.jsx
import React from "react";

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-full m-2">
      <div className="m-16 animate-spin rounded-full h-40 w-40 border-t-4 border-black border-opacity-50 bg-red-700"></div>
    </div>
  );
};

export default LoadingComponent;
