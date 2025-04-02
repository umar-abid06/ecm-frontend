import React, { useState } from "react";
import { loginValidationSchema } from "../utils/validationSchema.js";
import useAuth from "../hooks/useAuth.js";
import AuthForm from "../components/auth/AuthForm.jsx";
import { toast } from "react-toastify";
import { useStore } from "../store/index.js";

const Login = () => {
  const { login } = useAuth();
  const { emailCheckMsg } = useStore();

  const handleLoginSubmit = async (data, reset) => {
    try {
      // Call the login function from the useAuth hook with credentials
      const response = await login(data);
      // console.log("Resp in Login", response);

      if (response.status === "ERROR") {
        toast.error(response?.message);
        // Reset the form fields on error
        reset();
      } else {
        toast.success(response?.message);
        // Optionally clear the form on successful login (if you need to)
        reset();
      }
    } catch (err) {
      console.error("Login error:", err);
      // Show the error and reset the form
      toast.error("Login failed. Please try again.");
      reset(); // Reset the form after the error
    }
  };

  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen bg-gray-200 pb-32">
      {emailCheckMsg && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-5 w-full max-w-sm mx-auto"
          role="alert"
        >
          <strong className="font-bold">{emailCheckMsg}</strong>
        </div>
      )}
      <AuthForm
        validationSchema={loginValidationSchema}
        onSubmitHandler={handleLoginSubmit}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
