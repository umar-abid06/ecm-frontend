import React from "react";
import DashboardHeader from "../../components/shop/Layout/DashboardHeader";
import Footer from "../../components/layout/footer";
import OrderDetails from "../../components/shop/OrderDetails";

const ShopOrderDetails = () => {
  return (
    <div>
      <DashboardHeader />
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default ShopOrderDetails;
