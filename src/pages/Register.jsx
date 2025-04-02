import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthForm from "../components/auth/AuthForm";
import useAuth from "../hooks/useAuth";
import { PATHS } from "../utils/paths";
import { registerValidationSchema } from "../utils/validationSchema";
import { useStore } from "../store";

const Register = () => {
  const { register } = useAuth(); // Assuming you have a register function in useAuth
  const navigate = useNavigate();
  const { setEmailCheckMsg } = useStore();

  const handleRegisterSubmit = async (data) => {
    try {
      const response = await register(data); // Handle registration logic

      if (response.status === "SUCCESS") {
        toast.success(response?.data?.message);
        setEmailCheckMsg(response?.data?.message);
        navigate(PATHS.AUTH.LOGIN);
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
