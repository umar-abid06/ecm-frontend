import { useNavigate } from "react-router-dom";
import styles from "../../../styles/styles";
import { motion } from "framer-motion";
import useCategories from "../../../hooks/useCategories";
import { PATHS } from "../../../utils/paths";

const DropDown = ({ setDropDown }) => {
  const navigate = useNavigate();
  const { categories: categoriesData } = useCategories();
  const submitHandle = (i) => {
    navigate(`${PATHS.APP.PRODUCTS}?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-[270px] bg-white absolute z-30 rounded-b-xl shadow-lg overflow-hidden"
    >
      {categoriesData?.map((i) => (
        <div
          key={i.categoryType}
          onClick={() => submitHandle(i)}
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 group"
        >
          <img
            src={i.imageUrl}
            alt={i.title}
            className="w-6 h-6 object-contain select-none"
          />
          <h3 className="text-sm font-medium text-gray-800 group-hover:text-black select-none">
            {i.title}
          </h3>
        </div>
      ))}
    </motion.div>
  );
};

export default DropDown;
