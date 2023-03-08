import React from "react";
import { subsribbon } from "../assets/images";

const SubscriptionSection = () => {
  return (
    <div
      className='subscribe_CTA'
      style={{ backgroundImage: `url(${subsribbon})` }}>
      <div className='subscribe_cta_desc'>
        <h3>Subscribe Prime.Ae</h3>
        <p>
          Subscribe us and get avail all benefits, like discounts, offers, new
          arrivals etc
        </p>
      </div>
      <div className='subscribe_cta_button'>
        <h5>Subscribe Now</h5>
      </div>
    </div>
  );
};

export default SubscriptionSection;
