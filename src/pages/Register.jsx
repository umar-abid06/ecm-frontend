import React from "react";
import AuthForm from "../components/auth/AuthForm";
import { registerValidationSchema } from "../utils/validationSchema";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth(); // Assuming you have a register function in useAuth
  const navigate = useNavigate();

  const handleRegisterSubmit = async (data) => {
    try {
      const response = await register(data); // Handle registration logic
      // console.log("response in Register---->", response);
      if (response.status === "SUCCESS") {
        toast.success("Check your email inbox. Please verify the email!");
        navigate("/auth/login");
      } else {
        toast.error(`${response.data.message}
    `);
      }
    } catch (err) {
      toast.error(err);
      // console.error("Registration error:", err);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 pb-10">
      <AuthForm
        validationSchema={registerValidationSchema}
        onSubmitHandler={handleRegisterSubmit}
        isRegister={true}
        buttonText="Register"
      />
    </div>
  );
};

export default Register;
