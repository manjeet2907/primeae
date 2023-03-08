import React from "react";
import { KeyFacilities } from "../Components/Client";
import { CategoryContainer, SubscriptionSection } from "../Layouts";

const Homepage = () => {
  return (
    <div>
      <KeyFacilities />
      <CategoryContainer />
      {/* New Products */}
      {/* Featured Products */}
      {/* Prime Products */}
      {/* Brands We deal in */}
      <SubscriptionSection />
    </div>
  );
};

export default Homepage;
