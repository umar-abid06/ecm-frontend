// src/components/MyForm.js

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../utils/validationSchema.js";
import InputField from "../components/input-field/InputField.jsx"; // Reusable InputField component
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for password visibility
import useAuth from "../hooks/useAuth.js";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema), // Apply Yup validation schema
    mode: "onBlur",
  });

  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const onSubmit = async (data) => {
    console.log("Login Data:", data); // Handle login submission
    try {
      // Call the login function from the useAuth hook with credentials
      await login(data);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordIcons = {
    start: { icon: <FaLock className="text-gray-400" /> },
    end: {
      icon: !showPassword ? <FaEyeSlash /> : <FaEye />,
      onClick: handleTogglePasswordVisibility,
    },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 w-full max-w-sm mx-auto bg-white rounded-md shadow-md"
    >
      {/* Email Input */}
      <InputField
        name="email"
        control={control}
        placeholder="Enter your email"
        error={errors.email?.message}
        icons={{
          start: { icon: <FaEnvelope className="text-gray-400" /> },
        }}
        className="mb-4"
      />

      {/* Password Input */}
      <InputField
        name="password"
        control={control}
        placeholder="Enter your password"
        type={showPassword ? "text" : "password"}
        error={errors.password?.message}
        icons={passwordIcons}
        className="mb-4"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
