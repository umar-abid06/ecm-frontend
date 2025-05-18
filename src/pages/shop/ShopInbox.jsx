import React from "react";
import DashboardHeader from "../../components/shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/shop/Layout/DashboardSideBar";
import DashboardMessages from "../../components/shop/DashboardMessages";

const ShopInbox = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] md:w-[330px]">
          <DashboardSideBar active={8} />
        </div>
        <DashboardMessages />
      </div>
    </div>
  );
};

export default ShopInbox;
