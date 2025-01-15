import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useStore } from "../../../store";
import { PATHS } from "../../../utils/paths";

const DashboardHeader = () => {
  const { seller } = useStore();
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to={PATHS.APP.HOME}>
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link
            to={PATHS.APP.SHOP_DASHBOARD_COUPOUNS}
            className="md:block hidden"
          >
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link
            to={PATHS.APP.SHOP_DASHBOARD_EVENTS}
            className="md:block hidden"
          >
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link
            to={PATHS.APP.SHOP_DASHBOARD_EVENTS}
            className="md:block hidden"
          >
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link
            to={PATHS.APP.SHOP_DASHBOARD_ORDERS}
            className="md:block hidden"
          >
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link
            to={PATHS.APP.SHOP_DASHBOARD_MESSAGES}
            className="md:block hidden"
          >
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/${seller?.id}`}>
            <img
              src={`${seller?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
