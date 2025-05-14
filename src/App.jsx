// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import ApiClientProvider from "./context/ApiClientProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponent from "./components/LoadingComponent";
import useLoadingStore from "./store/loadingStore";
import "../src/styles/toast.css";

function App() {
  const { loading } = useLoadingStore();
  return (
    <ApiClientProvider>
      {loading && <LoadingComponent />}
      {/* Show LoadingComponent if loading */}
      <Router>
        <AppRoutes />
      </Router>
      <ToastContainer
        className="toast-container"
        position="top-right" // Position of the toast
        autoClose={5000} // Auto-close after 5 seconds
        hideProgressBar={false} // Show the progress bar
        newestOnTop={true} // Show newest toasts on top
        closeOnClick // Close when clicked
        pauseOnHover // Pause the toast on hover
        draggable // Allow users to drag the toast
        theme="colored" // Change toast theme (colored, light, dark, etc.)
      />
    </ApiClientProvider>
  );
}

export default App;
