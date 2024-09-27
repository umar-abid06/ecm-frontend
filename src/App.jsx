// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import ApiClientProvider from "./context/ApiClientProvider";

function App() {
  return (
    <ApiClientProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ApiClientProvider>
  );
}

export default App;
