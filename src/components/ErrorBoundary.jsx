import React, { useState, useEffect } from "react";
import ErrorComponent from "./ErrorComponent.jsx"; // Import the Error Component

// ErrorBoundary component for catching errors
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  // Error handling function
  const handleError = (error) => {
    console.error("Error caught by ErrorBoundary:", error);
    setHasError(true);
  };

  useEffect(() => {
    const handleUnhandledErrors = (event) => {
      handleError(event.error);
    };

    window.addEventListener("error", handleUnhandledErrors);
    window.addEventListener("unhandledrejection", handleUnhandledErrors);

    return () => {
      window.removeEventListener("error", handleUnhandledErrors);
      window.removeEventListener("unhandledrejection", handleUnhandledErrors);
    };
  }, []);

  // Display ErrorComponent if an error is caught
  if (hasError) {
    return <ErrorComponent />;
  }

  return children;
};
export default ErrorBoundary;
