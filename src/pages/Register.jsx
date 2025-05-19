import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "../store";
import { PATHS } from "../utils/paths";
import { registerValidationSchema } from "../utils/validationSchema";
import AuthForm from "../components/auth/AuthForm";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { register } = useAuth();
  const { setEmailCheckMsg } = useStore();
  const navigate = useNavigate();

  const handleRegisterSubmit = async (data) => {
    try {
      const response = await register(data);
      console.log(response, "REGISTER");
      if (response.status === 200) {
        toast.success(response?.data?.message);
        navigate(PATHS.AUTH.LOGIN);
      } else {
        toast.error(`${response?.message}
    `);
      }
    } catch (err) {
      toast.error(err);
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
