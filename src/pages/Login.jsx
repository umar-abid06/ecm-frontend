import React from "react";
import { loginValidationSchema } from "../utils/validationSchema.js";
import useAuth from "../hooks/useAuth.js";
import AuthForm from "../components/auth/AuthForm.jsx";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useAuth();

  const handleLoginSubmit = async (data, reset) => {
    try {
      // Call the login function from the useAuth hook with credentials
      const response = await login(data);
      // console.log("Resp in Login", response);

      if (response.status === "ERROR") {
        toast.error(response.message);
        // Reset the form fields on error
        reset();
      } else {
        toast.success("Successfully Login!");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-200 pb-32">
      <AuthForm
        validationSchema={loginValidationSchema}
        onSubmitHandler={handleLoginSubmit}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
