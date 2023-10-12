import { stripePublicKey } from "../config/stripe";
import { loadStripe } from "@stripe/stripe-js";

export const makePayment = async (plan, paymentMethodTypes, token) => {
  const body = { product: plan, paymentMethodTypes: paymentMethodTypes };
  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };

  const response = await fetch(
    "http://localhost:8000/api/checkout/create-checkout-session",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }
  );

  const session = await response.json();

  if (session.url) {
    // Redirect the user to the Stripe checkout session URL
    window.location.href = session.url;
  } else {
    console.error("Invalid or empty session URL");
  }

  // const result = stripe.redirectToCheckout({
  //   sessionId: session.id,
  // });

  // if (result.error) {
  //   console.log(result.error);
  // }
};
