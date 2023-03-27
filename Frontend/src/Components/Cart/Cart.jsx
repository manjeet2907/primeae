import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";
import { removeItemsFromCart } from "../../store/actions/cartAction";
import CartItemCard from "./CartItemCard";
import { MetaData } from "../../Layouts";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  return (
    <>
      <MetaData title='Cart' />
      <div className='cart'>
        {cartItems.length === 0 ? (
          <div className='emptyCart'>
            <MdRemoveShoppingCart />

            <h3>No Product in Your Cart</h3>
            <Link to='/products'>View Products</Link>
          </div>
        ) : (
          <>
            <div className='cartpage'>
              <div className='cartpage_Header'>
                <p>Product</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>

              {cartItems &&
                cartItems.map((item) => (
                  <div className='cartpage_Container' key={item.product}>
                    <CartItemCard
                      item={item}
                      deleteCartItems={deleteCartItems}
                    />
                  </div>
                ))}
            </div>
            <div className='checkout_box'>
              <p>Order Summary</p>

              <p>
                Total Amount-
                {`AED ${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}
              </p>

              <div className='checkOutBtn'>
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
