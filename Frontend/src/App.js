import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  AddnewProduct,
  AdminDashboard,
  Brand,
  Category,
  OrderProcessing,
  Orders,
  ProductList,
  UpdateProduct,
  UpdateReviews,
  UpdateUser,
  Users,
} from "./Components/Admin";

import { Cart, ConfirmOrder, OrderSuccess } from "./Components/Cart";
import { Profile } from "./Components/Client";
import {
  MyOrders,
  OrderDetail,
  PaymentPage,
  Shipping,
} from "./Components/Order";
import ProductPage from "./Components/Products/ProductPage";
import AuthRouter from "./Components/Router/AuthRouter";

import {
  ForgotPassword,
  ResetPassword,
  UpdatePassword,
  UpdateProfile,
} from "./Components/User";
import { Dashboard, UserLayout } from "./Layouts";

import {
  AboutUs,
  Homepage,
  ShopByBrand,
  CustomerSupport,
  Authentication,
  ErrorPage,
  Products,
  CategoryProducts,
} from "./Screens";
import { allBrands } from "./store/actions/brandAction";
import { allCategories } from "./store/actions/categoryAction";
import { loadUser } from "./store/actions/userAction";
import store from "./store/store";

import "./Styles/app.css";

function App() {
  const dispatch = useDispatch();

  const ROLES = {
    User: "user",
    Admin: "admin",
  };

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    dispatch(allCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allBrands());
  }, [dispatch]);

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<UserLayout />}>
          <Route index element={<Homepage />} />
          <Route path='authentication' element={<Authentication />} />
          <Route path='shopbybrand' element={<ShopByBrand />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='customersupport' element={<CustomerSupport />} />
          <Route path='password/reset/:token' element={<ResetPassword />} />
          <Route path='password/forgot' element={<ForgotPassword />} />
          <Route path='cart' element={<Cart />} />
          <Route exact path='/product/:id' element={<ProductPage />} />
          <Route exact path='allproducts' element={<Products />} />
          <Route path='/products/:keyword' element={<Products />} />
          <Route path='/getcategory/:id' element={<CategoryProducts />} />
        </Route>

        {/* protected Routes Authentication required */}
        <Route
          path='/profile'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/profile' element={<UserLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
        <Route
          path='/me/update'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/me/update' element={<UserLayout />}>
            <Route index element={<UpdateProfile />} />
          </Route>
        </Route>
        <Route
          path='/password/update'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/password/update' element={<UserLayout />}>
            <Route index element={<UpdatePassword />} />
          </Route>
        </Route>
        <Route
          path='/orders'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/orders' element={<UserLayout />}>
            <Route index element={<MyOrders />} />
          </Route>
        </Route>
        <Route
          path='/order/:id'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/order/:id' element={<UserLayout />}>
            <Route index element={<OrderDetail />} />
          </Route>
        </Route>
        <Route
          path='/shipping'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/shipping' element={<UserLayout />}>
            <Route index element={<Shipping />} />
          </Route>
        </Route>
        <Route
          path='/order/confirm'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/order/confirm' element={<UserLayout />}>
            <Route index element={<ConfirmOrder />} />
          </Route>
        </Route>
        <Route
          path='/success'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/success' element={<UserLayout />}>
            <Route index element={<OrderSuccess />} />
          </Route>
        </Route>
        <Route
          path='/process/payment'
          element={<AuthRouter allowedRoles={[ROLES.User, ROLES.Admin]} />}>
          <Route path='/process/payment' element={<UserLayout />}>
            <Route index element={<PaymentPage />} />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route
          path='/admin'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/admin' element={<Dashboard />}>
            <Route index element={<AdminDashboard />} />
          </Route>
        </Route>
        <Route
          path='/products'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/products' element={<Dashboard />}>
            <Route index element={<ProductList />} />
          </Route>
        </Route>
        <Route
          path='/product'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/product' element={<Dashboard />}>
            <Route index element={<AddnewProduct />} />
          </Route>
        </Route>
        <Route
          path='/admin/product/:id'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='product/:id' element={<Dashboard />}>
            <Route index element={<UpdateProduct />} />
          </Route>
        </Route>
        <Route
          path='/category'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/category' element={<Dashboard />}>
            <Route index element={<Category />} />
          </Route>
        </Route>
        <Route
          path='/brands'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/brands' element={<Dashboard />}>
            <Route index element={<Brand />} />
          </Route>
        </Route>
        <Route
          path='/admin/orders'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/admin/orders' element={<Dashboard />}>
            <Route index element={<Orders />} />
          </Route>
        </Route>
        <Route
          path='/order/:id'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/order/:id' element={<Dashboard />}>
            <Route index element={<OrderProcessing />} />
          </Route>
        </Route>
        <Route
          path='/users'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/users' element={<Dashboard />}>
            <Route index element={<Users />} />
          </Route>
        </Route>
        <Route
          path='/user/:id'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/user/:id' element={<Dashboard />}>
            <Route index element={<UpdateUser />} />
          </Route>
        </Route>
        <Route
          path='/reviews'
          element={<AuthRouter allowedRoles={[ROLES.Admin]} />}>
          <Route path='/reviews' element={<Dashboard />}>
            <Route index element={<UpdateReviews />} />
          </Route>
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
