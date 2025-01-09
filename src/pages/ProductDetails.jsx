import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductDetails } from "../components/products";
// import SuggestedProduct from "../components/Products/SuggestedProduct";
import Header from "../components/layout/header";
import { useStore } from "../store";
import Footer from "../components/layout/footer";

const ProductDetailsPage = () => {
  const { products: allProducts, events: allEvents } = useStore();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i?.id == id);
      setData(data);
    } else {
      const productData = allProducts && allProducts.find((i) => i.id == id);
      setData(productData);
      // console.log("DATA", data, allProducts, id);
    }
  }, [allProducts, allEvents]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {/* {!eventData && <>{data && <SuggestedProduct data={data} />}</>} */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
