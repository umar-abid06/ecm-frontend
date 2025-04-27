// src/components/shop/ShopForm.jsx

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhone,
  FaStore,
  FaHashtag,
} from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { PATHS } from "../../../utils/paths.js";
import InputField from "../../input-field/InputField.jsx";
import styles from "../../../styles/styles.js";

const ShopForm = ({
  validationSchema,
  onSubmitHandler,
  isCreate = false, // Flag to differentiate between Create and Login
  buttonText = "Login", // Default button text
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("avatar", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const passwordIcons = {
    start: { icon: <FaLock className="text-gray-400" /> },
    end: {
      icon: !showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />,
      onClick: handleTogglePasswordVisibility,
    },
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmitHandler(data, reset))}
      className="space-y-6 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 w-full max-w-md mx-auto"
    >
      {/* Only show these if isCreate is true */}
      {isCreate && (
        <>
          {/* Shop Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Shop Name
            </label>
            <InputField
              name="name"
              control={control}
              placeholder="Enter shop name"
              error={errors.name?.message}
              icons={{ start: { icon: <FaStore className="text-gray-400" /> } }}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <InputField
              name="phoneNumber"
              control={control}
              placeholder="Enter phone number"
              error={errors.phoneNumber?.message}
              type="tel"
              icons={{ start: { icon: <FaPhone className="text-gray-400" /> } }}
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <InputField
              name="address"
              control={control}
              placeholder="Enter address"
              error={errors.address?.message}
              icons={{
                start: { icon: <FaMapMarkerAlt className="text-gray-400" /> },
              }}
            />
          </div>

          {/* Zip Code */}
          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Zip Code
            </label>
            <InputField
              name="zipCode"
              control={control}
              placeholder="Enter zip code"
              error={errors.zipCode?.message}
              type="number"
              icons={{
                start: { icon: <FaHashtag className="text-gray-400" /> },
              }}
            />
          </div>
        </>
      )}

      {/* Always show Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address
        </label>
        <InputField
          name="email"
          control={control}
          placeholder="Enter email"
          error={errors.email?.message}
          type="email"
          icons={{ start: { icon: <FaEnvelope className="text-gray-400" /> } }}
        />
      </div>

      {/* Always show Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <InputField
          name="password"
          control={control}
          placeholder="Enter password"
          type={showPassword ? "text" : "password"}
          error={errors.password?.message}
          icons={passwordIcons}
        />
      </div>

      {/* Only show Avatar Upload if isCreate */}
      {isCreate && (
        <div>
          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Shop Avatar
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="avatar preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <RxAvatar className="h-10 w-10 text-gray-400" />
              )}
            </span>
            <label
              htmlFor="avatar-input"
              className="cursor-pointer bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm"
            >
              Upload File
              <input
                id="avatar-input"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 font-medium text-sm"
        >
          {buttonText}
        </button>
      </div>

      {/* Navigation Link */}
      <div className={`${styles.normalFlex} w-full text-center`}>
        {isCreate ? (
          <>
            <h4 className="text-sm text-gray-600">Already have an account?</h4>
            <Link
              to={PATHS.APP.SHOP_LOGIN}
              className="text-blue-600 hover:underline pl-2"
            >
              Sign In
            </Link>
          </>
        ) : (
          <>
            <h4 className="text-sm text-gray-600">Don't have an account?</h4>
            <Link
              to={PATHS.APP.SHOP_CREATE}
              className="text-blue-600 hover:underline pl-2"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </form>
  );
};

export default ShopForm;
