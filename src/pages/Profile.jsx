import React, { useState } from "react";
import { ProfileSidebar, ProfileContent } from "../components/profile";
import LoadingComponent from "../components/LoadingComponent";
import Header from "../components/layout/header";
import styles from "../styles/styles";
import { useStore } from "../store";

const Profile = () => {
  const { isLoading } = useStore();
  const [active, setActive] = useState(1);

  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Header />
          <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className="w-[50px] md:w-[335px] sticky md:mt-0 mt-[18%]">
              <ProfileSidebar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
