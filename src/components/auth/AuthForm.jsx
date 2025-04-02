// src/components/auth/AuthForm.js

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PATHS } from "../../utils/paths.js";
import InputField from "../input-field/InputField.jsx"; // Reusable InputField component

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
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema), // Apply the correct validation schema
    mode: "onBlur",
  });

  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle password visibility

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const passwordIcons = {
    start: { icon: <FaLock className="text-gray-400" /> },
    end: {
      icon: !showPassword ? <FaEyeSlash /> : <FaEye />,
      onClick: handleTogglePasswordVisibility,
    },
  };
  const confirmPasswordIcons = {
    start: { icon: <FaLock className="text-gray-400" /> },
    end: {
      icon: !showConfirmPassword ? <FaEyeSlash /> : <FaEye />,
      onClick: handleToggleConfirmPasswordVisibility,
    },
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmitHandler(data, reset))} // Pass the reset function
      className="md:px-6 md:py-4 md:mx-auto px-6 py-3 mx-6 w-full max-w-sm  bg-white rounded-lg shadow-md"
    >
      {isRegister && (
        <>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
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
        </>
      )}

      {/* Email Input with Label */}
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Email
      </label>
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

      {/* Password Input with Label */}
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Password
      </label>
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
        <>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirm Password
          </label>
          <InputField
            name="confirmPassword"
            control={control}
            placeholder="Confirm your password"
            type={showPassword ? "text" : "password"}
            error={errors.confirmPassword?.message}
            icons={passwordIcons}
            className="mb-4"
          />
        </>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        {buttonText}
      </button>

      {/* Horizontal Separator */}
      <div className="my-6 border-t border-gray-300 text-center relative">
        <span className="bg-white px-2 text-sm text-gray-500 absolute -top-3 left-1/2 transform -translate-x-1/2">
          or
        </span>
      </div>

      {/* Login/Register Navigation Button */}
      {isRegister ? (
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to={PATHS.AUTH.LOGIN}
              className="text-blue-500 hover:underline transition duration-200"
            >
              Log In
            </Link>
          </span>
        </div>
      ) : (
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to={PATHS.AUTH.REGISTER}
              className="text-blue-500 hover:underline transition duration-200"
            >
              Register
            </Link>
          </span>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
