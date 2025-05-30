import useShops from "../../hooks/useShops";
import ShopForm from "./forms/ShopForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PATHS } from "../../utils/paths";
import { shopLoginValidationSchema } from "../../utils/validationSchema";

const ShopLogin = () => {
  const { shopLogin } = useShops();
  const navigate = useNavigate();

  const handleShopLogin = async (shopData) => {
    try {
      const response = await shopLogin(shopData);

      if (response.status === 200) {
        toast.success(response?.message);
        navigate(PATHS.APP.SHOP_HOME);
      } else {
        toast.error(`${response?.data.message}
      `);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your shop
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <ShopForm
          validationSchema={shopLoginValidationSchema}
          onSubmitHandler={handleShopLogin}
          isCreate={false}
          buttonText="Login"
        />
      </div>
    </div>
  );
};

export default ShopLogin;
