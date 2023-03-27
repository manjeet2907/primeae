import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import axios from "../../axios";
import { MetaData } from "../../Layouts";
import CheckoutSteps from "./CheckoutSteps";
import Paymentcard from "./Paymentcard";

const PaymentPage = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    getStripeApiKey();
  }, []);
  console.log(stripeApiKey);

  return (
    <>
      <MetaData title='Payment Page' />
      <CheckoutSteps activeStep={2} />
      <div className='paymentpage'>
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Paymentcard />
          </Elements>
        )}
      </div>
    </>
  );
};

export default PaymentPage;
