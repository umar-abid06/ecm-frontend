// src/validationSchemas/formValidationSchema.js
import * as yup from "yup";

// Define your Yup validation schema
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const shopLoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
export const shopCreateValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Shop name is required")
    .min(3, "Shop name must be at least 3 characters"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),

  address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters"),

  zipCode: yup
    .string()
    .required("Zip code is required")
    .matches(/^\d{5}$/, "Zip code must be exactly 5 digits"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  avatar: yup
    .mixed()
    .nullable()
    .notRequired()
    .test("fileSize", "File too large", (value) => {
      if (!value) return true; // Avatar is optional
      return value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test("fileType", "Unsupported File Format", (value) => {
      if (!value) return true;
      return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
    }),
});
