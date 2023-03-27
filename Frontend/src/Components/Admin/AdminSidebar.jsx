import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className='adminSidebar'>
      <Link to='/'>
        <h2>Prime Ae</h2>
      </Link>
      <Link to='/admin'>
        <p>Dashboard</p>
      </Link>
      <NavLink to='/products'>
        <p>Products</p>
      </NavLink>
      <NavLink to='/category'>
        <p>Category</p>
      </NavLink>
      <NavLink to='/brands'>
        <p>Brands</p>
      </NavLink>
      <NavLink to='/admin/orders'>
        <p>Orders</p>
      </NavLink>
      <NavLink to='/users'>
        <p>Users</p>
      </NavLink>
      <NavLink to='/reviews'>
        <p>Reviews</p>
      </NavLink>
    </div>
  );
};

export default AdminSidebar;
