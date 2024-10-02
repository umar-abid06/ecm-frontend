import React, { useState } from "react";
import { loginValidationSchema } from "../utils/validationSchema.js";
import useAuth from "../hooks/useAuth.js";
import AuthForm from "../components/auth/AuthForm.jsx";
import { toast } from "react-toastify";

function Login() {
  const { login } = useAuth();

  const handleLoginSubmit = async (data) => {
    console.log("Login Data:", data); // Handle login submission
    try {
      // Call the login function from the useAuth hook with credentials
      // const response =
      await login(data);
      // console.log("Resp in Login", response);
      // if (response.status === "ERROR") {
      //   toast.error(response.message);
      // }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <AuthForm
      validationSchema={loginValidationSchema}
      onSubmitHandler={handleLoginSubmit}
    />
  );
}

export default Login;
