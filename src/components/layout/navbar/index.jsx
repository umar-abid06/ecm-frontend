import { Link } from "react-router-dom";
import { navItems } from "../../../static/data.jsx";
import styles from "../../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`block md:${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex" key={i.title}>
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#17dd1f]"
                  : "text-black md:text-[#fff]"
              } pb-[30px] md:pb-0 font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
