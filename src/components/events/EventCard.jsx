import styles from "../../styles/styles";
import { CountDown } from "./";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "../../store";

const EventCard = ({ active, data }) => {
  const { cart, addToCart } = useStore;

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        addToCart(cartData);
        toast.success("Item added to cart successfully!");
      }
    }
  };
  return (
    // <div
    //   className={`w-full block bg-white rounded-lg ${
    //     active ? "unset" : "mb-12"
    //   } lg:flex p-2`}
    // >
    //   <div className="w-full lg:-w[50%] m-auto">
    //     <img src={`${data.images[0]?.url}`} alt="" />
    //   </div>
    //   <div className="w-full lg:[w-50%] flex flex-col justify-center">
    //     <h2 className={`${styles.productTitle}`}>{data.name}</h2>
    //     <p>{data.description}</p>
    //     <div className="flex py-2 justify-between">
    //       <div className="flex">
    //         <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
    //           {data.originalPrice}$
    //         </h5>
    //         <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
    //           {data.discountPrice}$
    //         </h5>
    //       </div>
    //       <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
    //         {data.sold_out} sold
    //       </span>
    //     </div>
    //     <CountDown data={data} />
    //     <br />
    //     <div className="flex items-center">
    //       <Link to={`/product/${data._id}?isEvent=true`}>
    //         <div className={`${styles.button} text-[#fff]`}>See Details</div>
    //       </Link>
    //       <div
    //         className={`${styles.button} text-[#fff] ml-5`}
    //         onClick={() => addToCartHandler(data)}
    //       >
    //         Add to cart
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour
        </h2>
        <p>
          Product details are a crucial part of any eCommerce website or online
          marketplace. These details help the potential customers to make an
          informed decision about the product they are interested in buying. A
          well-written product description can also be a powerful marketing tool
          that can help to increase sales.Product details typically include
          information about the products features, specifications, dimensions,
          weight, materials, and other relevant information that can help
          customers to understand the product better. The product details
          section should also include high-quality images and videos of the
          product, as well as customer reviews and ratings.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099 $
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999 $
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
        <br />
        <div className="flex items-center">
          {/* <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link> */}
          <div
            className={`${styles.button} text-[#fff] ml-5`}
            onClick={() => addToCartHandler(data)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
