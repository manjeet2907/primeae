import React from "react";
import { lazy, Suspense } from "react";
import { Sales, SearchSection } from "./index";
const MainNavbar = lazy(() => import("./MainNavbar"));

const Header = () => {
  return (
    <div className='header'>
      <Sales />
      <SearchSection />
      <Suspense fallback={<div className='loadText'></div>}>
        <MainNavbar />
      </Suspense>
    </div>
  );
};

export default Header;
