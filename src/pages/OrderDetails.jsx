import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import UserOrderDetails from "../components/order/UserOrderDetails";

const OrderDetailsPage = () => {
  return (
    <div>
      <Header />
      <UserOrderDetails />
      <Footer />
    </div>
  );
};

export default OrderDetailsPage;
