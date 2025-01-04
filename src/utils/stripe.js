import { loadStripe } from "@stripe/stripe-js";

export const getStripePromise = (stripeApiKey) => {
  return stripeApiKey ? loadStripe(stripeApiKey) : null;
};
