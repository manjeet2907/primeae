import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Components/Client";

const UserLayout = () => {
  return (
    <div className='userLayout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
