import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopCreate from "../components/shop/ShopCreate";
import { useStore } from "../store";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useStore();

  // useEffect(() => {
  //   if (isSeller === true) {
  //     navigate(`/shop/${seller._id}`);
  //   }
  // }, []);
  return (
    <div>
      <ShopCreate />
    </div>
  );
};

export default ShopCreatePage;
