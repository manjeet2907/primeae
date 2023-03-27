import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemsToCart } from "../../store/actions/cartAction";
import { AiFillDelete } from "react-icons/ai";

const CartItemCard = ({ item, deleteCartItems }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };
  return (
    <div className='cartItemCard'>
      <div className='productdets'>
        <div className='productdets_img'>
          <img src={item.image} alt='imageproduct' />
        </div>
        <div className='productdets_dets'>
          <Link to={`/product/${item.product}`}>
            {item.name.length >= 60 ? (
              <p>{item.name.substring(0, 50)}...</p>
            ) : (
              <p>{item.name}</p>
            )}
          </Link>
          <span>{`Price: AED - ${item.price}`}</span>
        </div>
      </div>
      <div className='cartItem_qty'>
        <div className='cartInput'>
          <button onClick={() => decreaseQuantity(item.product, item.quantity)}>
            -
          </button>
          <input type='number' value={item.quantity} readOnly />
          <button
            onClick={() =>
              increaseQuantity(item.product, item.quantity, item.stock)
            }>
            +
          </button>
        </div>
      </div>
      <p className='cartSubtotal'>{`AED-${item.price * item.quantity}/-`}</p>
      <div className='cartItemCard_action'>
        <p onClick={() => deleteCartItems(item.product)}>
          <AiFillDelete />
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
