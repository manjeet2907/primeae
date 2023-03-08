import React from "react";
import { MainNavbar, Sales, SearchSection } from "../Components/Client";

const Header = () => {
  return (
    <div>
      <Sales />
      <SearchSection />
      <MainNavbar />
    </div>
  );
};

export default Header;
