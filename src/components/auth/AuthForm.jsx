// src/components/auth/AuthForm.js

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../input-field/InputField.jsx"; // Reusable InputField component
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const AuthForm = ({
  validationSchema,
  onSubmitHandler,
  isRegister = false, // Flag to differentiate between Login and Register
  buttonText = "Login", // Default button text to "Login"
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Apply the correct validation schema
    mode: "onBlur",
  });

  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

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
      onSubmit={handleSubmit(onSubmitHandler)}
      className="p-4 w-full max-w-sm mx-auto bg-white rounded-md shadow-md"
    >
      {isRegister && (
        // Name Input Field (only for registration)
        <InputField
          name="name"
          control={control}
          placeholder="Enter your name"
          error={errors.name?.message}
          icons={{
            start: { icon: <FaUser className="text-gray-400" /> },
          }}
          className="mb-4"
        />
      )}

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

      {isRegister && (
        // Confirm Password Input Field (only for registration)
        <InputField
          name="confirmPassword"
          control={control}
          placeholder="Confirm your password"
          type="password"
          error={errors.confirmPassword?.message}
          icons={{
            start: { icon: <FaLock className="text-gray-400" /> },
          }}
          className="mb-4"
        />
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
