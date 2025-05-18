import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import LoadingComponent from "../components/LoadingComponent";
import ProductCard from "../components/products/ProductCard";
import { useStore } from "../store";
import styles from "../styles/styles";
import { useAllProducts } from "../hooks/useProducts";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");

  const { data: allProducts, isLoading, error } = useAllProducts();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }

    window.scrollTo(0, 0);
  }, [allProducts]);

  return (
    <>
      <div>
        <Header activeHeading={3} />
        <br />
        <br />
        <div className={`${styles.section}`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {isLoading ? (
              <LoadingComponent />
            ) : (
              data &&
              data.map((i, index) => <ProductCard data={i} key={index} />)
            )}
          </div>
          {data && data.length === 0 ? (
            <>
              <h1 className="text-center w-full  text-[20px]">
                No products Found!
              </h1>
              <p className="text-center w-full pb-[100px] text-[20px]">
                For this category: {categoryData}
              </p>
            </>
          ) : null}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
