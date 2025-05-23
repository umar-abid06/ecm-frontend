import React, { useState } from "react";
// import { backend_url, server } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/styles";
import { toast } from "react-toastify";
import { useStore } from "../../store";
import { RxAvatar } from "react-icons/rx";

const ShopSettings = () => {
  const { seller } = useStore();
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState(seller && seller?.name);
  const [description, setDescription] = useState(
    seller && seller.description ? seller.description : ""
  );
  const [address, setAddress] = useState(seller && seller.address);
  const [phoneNumber, setPhoneNumber] = useState(seller && seller.phoneNumber);
  const [zipCode, setZipcode] = useState(seller && seller.zipCode);

  const handleImage = async (e) => {
    const reader = new FileReader();

    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     setAvatar(reader.result);
    //     axios
    //       .put(
    //         `${server}/shop/update-shop-avatar`,
    //         { avatar: reader.result },
    //         {
    //           withCredentials: true,
    //         }
    //       )
    //       .then((res) => {
    //         dispatch(loadSeller());
    //         toast.success("Avatar updated successfully!");
    //       })
    //       .catch((error) => {
    //         toast.error(error.response.data.message);
    //       });
    //     }
    //   };
    toast.success("Avatar updated successfully!");

    reader.readAsDataURL(e.target.files[0]);
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    // await axios
    //   .put(
    //     `${server}/shop/update-seller-info`,
    //     {
    //       name,
    //       address,
    //       zipCode,
    //       phoneNumber,
    //       description,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((res) => {
    //     toast.success("Shop info updated succesfully!");
    //     dispatch(loadSeller());
    //   })
    //   .catch((error) => {
    //     toast.error(error.response.data.message);
    //   });
    toast.success("Shop info updated succesfully!");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="flex w-full md:w-[80%] flex-col justify-center my-5">
        <div className="w-full flex items-center justify-center">
          <div className="relative">
            {avatar ? (
              <img
                src={avatar ? avatar : `${seller?.avatar?.url}`}
                alt=""
                className="w-[200px] h-[200px] rounded-full cursor-pointer"
              />
            ) : (
              <RxAvatar className="w-[200px] h-[200px] text-gray-400" />
            )}

            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[15px]">
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={handleImage}
              />
              <label htmlFor="image">
                <AiOutlineCamera />
              </label>
            </div>
          </div>
        </div>

        {/* shop info */}
        <form
          aria-aria-required={true}
          className="flex flex-col items-center"
          onSubmit={updateHandler}
        >
          <div className="w-[100%] flex items-center flex-col md:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Name</label>
            </div>
            <input
              type="name"
              placeholder={`${seller?.name}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${styles.input} !w-[95%] mb-4 :mb-0`}
              required
            />
          </div>
          <div className="w-[100%] flex items-center flex-col md:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop description</label>
            </div>
            <input
              type="name"
              placeholder={`${
                seller?.description
                  ? seller.description
                  : "Enter your shop description"
              }`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
            />
          </div>
          <div className="w-[100%] flex items-center flex-col md:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Address</label>
            </div>
            <input
              type="name"
              placeholder={seller?.address}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
              required
            />
          </div>

          <div className="w-[100%] flex items-center flex-col md:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Phone Number</label>
            </div>
            <input
              type="number"
              placeholder={seller?.phoneNumber}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
              required
            />
          </div>

          <div className="w-[100%] flex items-center flex-col md:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Zip Code</label>
            </div>
            <input
              type="number"
              placeholder={seller?.zipCode}
              value={zipCode}
              onChange={(e) => setZipcode(e.target.value)}
              className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
              required
            />
          </div>

          <div className="w-[100%] flex items-center flex-col md:w-[50%] mt-5">
            <input
              type="submit"
              value="Update Shop"
              className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
              required
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopSettings;
