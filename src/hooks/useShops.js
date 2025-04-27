import { useMutation } from "@tanstack/react-query";
import { requestApi } from "../api/requestApi";
import { ENDPOINTS } from "../api/endpoints";

const useShops = () => {
  //   const { setShopCreated } = useShopStore(); // Hypothetical state setter

  const createShopMutation = useMutation({
    mutationFn: (shopData) => {
      const formData = new FormData();
      for (const key in shopData) {
        formData.append(key, shopData[key]);
      }
      return requestApi(ENDPOINTS.SHOP_CREATE, "post", formData, {
        "Content-Type": "multipart/form-data",
      });
    },
    onSuccess: (response) => {
      //   setShopCreated(true, response); // Maybe set shop created flag + data
      console.log(response, "From API");
    },
    onError: (error) => {
      console.error("Shop creation failed:", error);
    },
  });
  const loginShopMutation = useMutation({
    mutationFn: (shopData) => {
      const formData = new FormData();
      for (const key in shopData) {
        formData.append(key, shopData[key]);
      }

      return requestApi(ENDPOINTS.SHOP_LOGIN, "post", formData, {
        "Content-Type": "multipart/form-data",
      });
    },
    onSuccess: (response) => {
      console.log(response, "From API");
    },
    onError: (error) => {
      console.error("Shop Login failed:", error);
    },
  });

  return {
    shopCreate: createShopMutation.mutateAsync,
    shopLogin: loginShopMutation.mutateAsync,
  };
};

export default useShops;
