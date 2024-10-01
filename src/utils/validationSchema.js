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
