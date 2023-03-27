import React, { useEffect } from "react";
import { getAdminProduct } from "../../store/actions/productAction";
import { getAllOrders } from "../../store/actions/orderAction.js";
import { getAllUsers } from "../../store/actions/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });
  return (
    <div className='dashboardContainer'>
      <h1 component='h1'>Dashboard</h1>

      <div className='dashboardSummary'>
        <h4>Total Amount AED- {totalAmount}</h4>

        <div className='dashboardSummary2'>
          <Link to='/products'>
            <p>Products - </p>
            <p>
              Total Products Count <br />
              {products && products.length}
            </p>
          </Link>
          <Link to='/admin/orders'>
            <p>Orders -</p>
            <p>
              Total Orders Placed
              <br />
              {orders && orders.length}
            </p>
          </Link>
          <Link to='/users'>
            <p>Users -</p>
            <p>
              Total Customers
              <br />
              {users && users.length}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
