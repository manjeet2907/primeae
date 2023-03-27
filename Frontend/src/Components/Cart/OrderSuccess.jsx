import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

const OrderSuccess = () => {
  return (
    <div className='orderssuccess'>
      <BsFillCheckCircleFill />
      <h2>Your Order has been Placed successfully </h2>
      <Link to='/orders'>View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
