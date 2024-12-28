import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin";
import { useStore } from "../store";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useStore();

  useEffect(() => {
    if (isSeller === true) {
      //   navigate(`/shop-dashboard`);
    }
  }, [isLoading, isSeller]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
