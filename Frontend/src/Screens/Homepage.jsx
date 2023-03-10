import React from "react";
import { KeyFacilities } from "../Components/Client";
import { CategoryContainer, MetaData, SubscriptionSection } from "../Layouts";

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
