import React from "react";
import {
  CategoryContainer,
  KeyFacilities,
  SubscriptionSection,
} from "../Components/Client";
import { MetaData } from "../Layouts";

const Homepage = () => {
  return (
    <>
      <MetaData title={"Prime Ae-Home"} />
      <KeyFacilities />
      <CategoryContainer />
      {/* New Products */}
      {/* Featured Products */}
      {/* Prime Products */}
      {/* Brands We deal in */}
      <SubscriptionSection />
    </>
  );
};

export default Homepage;
