import React from "react";
import { MetaData } from "../../Layouts";
import CreateTable from "./CreateTable";

const headers = ["Order DI", "Created By", "Process"];
const Orders = () => {
  return (
    <>
      <MetaData title='Orders-Admin' />
      <h3>Orders Management</h3>
      <div className='orderspage_admin'>
        <div className='orders_List'>
          <CreateTable headers={headers} />
        </div>
      </div>
    </>
  );
};

export default Orders;
