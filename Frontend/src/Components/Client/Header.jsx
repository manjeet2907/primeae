import React from "react";
import { MainNavbar, Sales, SearchSection } from ".";

const Header = () => {
  return (
    <div className='header'>
      <Sales />
      <SearchSection />
      <MainNavbar />
    </div>
  );
};

export default Header;
