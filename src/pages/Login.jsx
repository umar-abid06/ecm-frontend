import { toast } from "react-toastify";
import { useStore } from "../store/index.js";
import { loginValidationSchema } from "../utils/validationSchema.js";
import AuthForm from "../components/auth/AuthForm.jsx";
import useAuth from "../hooks/useAuth.js";

const Login = () => {
  const { login } = useAuth();
  const { emailCheckMsg } = useStore();

  // const handleLoginSubmit = async (data, reset) => {
  //   try {
  //     const response = await login(data);
  //     console.log("Login response:", response);
  //     if (response.status === httpCodes[400]) {
  //       toast.error(response?.message);
  //       reset();
  //     } else {
  //       toast.success(response?.message);
  //       reset();
  //     }
  //   } catch (err) {
  //     toast.error("Login failed. Please try again.");
  //     reset();
  //   }
  // };

  const handleLoginSubmit = async (data, reset) => {
    try {
      const response = await login(data);
      toast.success(response.message);
      reset();
    } catch (err) {
      if (err.status === 400) {
        toast.error(err.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
      reset();
    }
  };

  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen bg-gray-200 pb-32">
      {emailCheckMsg && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-5 w-full max-w-sm mx-auto"
          role="alert"
        >
          <strong className="font-bold">{emailCheckMsg}</strong>
        </div>
      )}
      <AuthForm
        validationSchema={loginValidationSchema}
        onSubmitHandler={handleLoginSubmit}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
