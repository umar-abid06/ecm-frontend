import React, { useEffect, useState } from "react";
import { useAllProducts } from "../../hooks/useProducts";
import { ProductCard } from "../products";
import styles from "../../styles/styles";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { data: products, isLoading, error } = useAllProducts();

  useEffect(() => {
    const allProductsData = products ? [...products] : [];
    const sortedData = allProductsData?.sort(
      (a, b) => b.total_sell - a.total_sell
    );
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [products]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
