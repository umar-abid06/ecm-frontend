import { useEffect, useState } from "react";

const useStripeApiKey = () => {
  //   const [stripeApiKey, setStripeApiKey] = useState(null);

  const stripeApiKey = import.meta.env.VITE_STRIPE_KEY;
  //   useEffect(() => {
  //     const fetchStripeApiKey = async () => {
  //       try {
  //         // const response = await fetch("/api/get-stripe-api-key"); // Your backend endpoint
  //         // const data = await response.json();

  //         setStripeApiKey(stripeApiKey); // Key from your backend
  //       } catch (error) {
  //         console.error("Error fetching Stripe API key:", error);
  //       }
  //     };

  //     fetchStripeApiKey();
  //   }, []);

  return stripeApiKey;
};

export default useStripeApiKey;
