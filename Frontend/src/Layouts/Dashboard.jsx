import React from "react";
import { Outlet } from "react-router-dom";
import { MetaData } from ".";

import { AdminSidebar } from "../Components/Admin";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <MetaData title='Dashboard - Admin Panel' />
      <div className='dashboard_sidebar'>
        <AdminSidebar />
      </div>
      <div className='dashboard_main'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
