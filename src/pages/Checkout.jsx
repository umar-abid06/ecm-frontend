import React from "react";

import CheckoutSteps from "../components/checkout/CheckoutSteps";
import Checkout from "../components/checkout/Checkout";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <CheckoutSteps active={1} />
      <Checkout />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
