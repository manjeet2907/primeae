import React, { lazy, Suspense } from "react";
import {
  KeyFacilities,
  SubscriptionSection,
  Loader,
} from "../Components/Client";
import { MetaData } from "../Layouts";
const CategoryContainer = lazy(() =>
  import("../Components/Client/CategoryContainer")
);

const Homepage = () => {
  return (
    <>
      <MetaData title={"Prime Ae-Home"} />
      <KeyFacilities />
      <Suspense fallback={<Loader />}>
        <CategoryContainer />
      </Suspense>
      {/* New Products */}
      {/* Featured Products */}
      {/* Prime Products */}
      {/* Brands We deal in */}
      <SubscriptionSection />
    </>
  );
};

export default Homepage;
