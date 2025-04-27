import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductDetails } from "../components/products";
// import SuggestedProduct from "../components/Products/SuggestedProduct";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import { useStore } from "../store";
import { useProductById } from "../hooks/useProducts";

const ProductDetailsPage = () => {
  const { events: allEvents } = useStore();
  const { id } = useParams();
  const { data } = useProductById(id);
  const [eventData, setEventData] = useState(null);
  const [searchParams] = useSearchParams();
  const isEventData = searchParams.get("isEvent");

  useEffect(() => {
    if (isEventData !== null) {
      const data = allEvents && allEvents.find((i) => i?.id == id);
      setEventData(data);
    }
    //  else {
    //   const productData = allProducts && allProducts.find((i) => i.id == id);
    //   setData(productData);
    //   // console.log("DATA", data, allProducts, id);
    // }
  }, [allEvents]);

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
