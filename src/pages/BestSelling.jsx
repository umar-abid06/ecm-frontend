import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/layout/header";
import LoadingComponent from "../components/LoadingComponent";
import Footer from "../components/layout/footer";
import { ProductCard } from "../components/products";
import styles from "../styles/styles";
import { useStore } from "../store";

const BestSelling = () => {
  const [data, setData] = useState([]);
  const { products: allProducts, isLoading } = useStore();

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    setData(sortedData);
  }, [allProducts]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <Header activeHeading={2} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default BestSelling;
